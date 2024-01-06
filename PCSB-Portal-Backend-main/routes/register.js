const express = require("express");
const multer = require("multer");
const _ = require("lodash");
const bcrypt = require("bcrypt");

const { Member, validate } = require("../models/member");
const { Domain, addDomain } = require("../models/domain");
const { OTP } = require("../models/otp");

const { addImage } = require("../utils/awsS3upload");
const { getSpreadSheetValues } = require("../utils/googleSheetsService");
const {
  sendRegistrationOtpMail,
  sendRegistrationSuccessMail,
} = require("../utils/sendMail");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const checkIfMemberAllowed = async (req, res, next) => {
  const { email } = req.body;

  if (!email) return res.status(400).send({ message: "Email is required" });

  const membersRes = await getSpreadSheetValues();
  const members = membersRes.data.values;

  const coreMembers = members[0].slice(1);
  const membersList = members[1].slice(1);

  if (coreMembers.includes(email)) req.body.isCoreMember = true;
  else if (membersList.includes(email)) req.body.isCoreMember = false;
  else return res.status(400).send({ message: "Member not allowed" });

  next();
};

const initReqBody = async (req, res, next) => {
  const { expertise, additionalLinks, description } = req.body;

  if (!expertise) req.body.expertise = {};
  else req.body.expertise = JSON.parse(expertise);

  if (!additionalLinks) req.body.additionalLinks = {};
  else req.body.additionalLinks = JSON.parse(additionalLinks);

  if (!description) req.body.description = "";

  let imageLink = null;

  if (req.file) {
    if (req.file.size > 5 * 1024 * 1024) {
      return res
        .status(400)
        .send({ message: "File size too large, max 5MB allowed" });
    }

    imageLink = await addImage(req.file);
  }

  req.body.image = imageLink || "";

  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);

  next();
};

router.post(
  "/",
  [upload.single("image"), checkIfMemberAllowed, initReqBody],
  async (req, res) => {
    const member = _.pick(req.body, [
      "name",
      "email",
      "password",
      "description",
      "image",
      "isCoreMember",
      "phone",
      "linkedIn",
      "github",
      "additionalLinks",
      "expertise",
    ]);

    const { error } = validate(member);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    await Member.deleteMany({ email: member.email, isVerified: false });

    const memberInDB = await Member.findOne({ email: member.email });
    if (memberInDB)
      return res.status(400).send({ message: "Member already exists." });

    const newMember = new Member(member);
    await newMember.save();

    const otp = Math.floor(100000 + Math.random() * 900000);

    const newOtp = new OTP({
      email: newMember.email,
      otp: otp,
    });

    await sendRegistrationOtpMail(newMember.name, newMember.email, otp);
    await newOtp.save();

    res.status(200).send({ message: "Registration OTP sent successfully." });
  }
);

router.post("/verify", async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp)
    return res.status(400).send({ message: "Please provide email/otp" });

  const otpDoc = await OTP.findOne({ email: email });
  if (!otpDoc) return res.status(400).send({ message: "Time expired." });

  if (otpDoc.otp !== otp)
    return res.status(400).send({ message: "Incorrect OTP." });

  const member = await Member.findOne({ email: email });
  if (!member)
    return res.status(400).send({ message: "Member does not exist." });

  member.isVerified = true;

  for (let [domain, expertise] of member.expertise) {
    let domainInDB = await Domain.findOne({ name: domain });

    if (!domainInDB) {
      domainInDB = await addDomain(domain);
    }

    expertise.forEach(async (exp) => {
      if (!domainInDB.expertise.includes(exp)) {
        domainInDB.expertise.push(exp);
        domainInDB.expertCoreMembers.set(exp, []);
        domainInDB.expertMembers.set(exp, []);
      }

      if (member.isCoreMember) {
        domainInDB.expertCoreMembers.get(exp).push(member._id);
      } else {
        domainInDB.expertMembers.get(exp).push(member._id);
      }
    });

    await domainInDB.save();
  }

  await member.save();

  const token = member.generateAuthToken();

  await OTP.deleteMany({ email: email });

  await sendRegistrationSuccessMail(member.name, member.email);

  res
    .status(200)
    .header("x-auth-token", token)
    .send({
      message: "Member verified successfully.",
      member: _.pick(member, [
        "_id",
        "name",
        "email",
        "description",
        "image",
        "isCoreMember",
        "phone",
        "linkedIn",
        "github",
        "additionalLinks",
        "expertise",
      ]),
    });
});

router.put("/", upload.single("image"), initReqBody, async (req, res) => {
  const member = _.pick(req.body, [
    "name",
    "email",
    "password",
    "image",
    "isCoreMember",
    "phone",
    "linkedIn",
    "github",
    "additionalLinks",
    "expertise",
  ]);

  const { error } = validate(member);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const salt = await bcrypt.genSalt(10);
  member.password = await bcrypt.hash(member.password, salt);

  const updatedMember = await Member.findByIdAndUpdate(
    req.user._id,
    { $set: member },
    { new: true }
  );

  const token = updatedMember.generateAuthToken();

  res
    .status(200)
    .header("x-auth-token", token)
    .send(
      _.pick(updatedMember, [
        "_id",
        "name",
        "email",
        "image",
        "isCoreMember",
        "phone",
        "linkedIn",
        "github",
        "additionalLinks",
        "expertise",
      ])
    );
});

module.exports = router;
