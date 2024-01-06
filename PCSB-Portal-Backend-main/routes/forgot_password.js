const express = require("express");
const bcrypt = require("bcrypt");

const { Member } = require("../models/member");
const { OTP } = require("../models/otp");
const { sendForgotPasswordMail } = require("../utils/sendMail");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).send({ message: "Please provide email" });

  const member = await Member.findOne({ email: email });
  if (!member)
    return res.status(400).send({ message: "Member does not exist." });

  await OTP.deleteMany({ email: email });

  const otp = Math.floor(100000 + Math.random() * 900000);

  await sendForgotPasswordMail(member.name, member.email, otp);

  const otpDoc = new OTP({
    email: email,
    otp: otp,
  });

  await otpDoc.save();

  res.status(200).send({ message: "OTP sent successfully." });
});

router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp)
    return res.status(400).send({ message: "Please provide email/otp" });

  const otpDoc = await OTP.findOne({ email: email });
  if (!otpDoc) return res.status(400).send({ message: "Time expired." });

  if (otpDoc.otp !== otp)
    return res.status(400).send({ message: "Incorrect OTP." });

  res.status(200).send({ message: "OTP verified successfully." });
});

router.post("/reset-password", async (req, res) => {
  const { email, otp, password } = req.body;

  if (!email || !otp || !password)
    return res
      .status(400)
      .send({ message: "Please provide email/otp/password" });

  const otpDoc = await OTP.findOne({ email: email });
  if (!otpDoc) return res.status(400).send({ message: "Time expired." });

  if (otpDoc.otp !== otp)
    return res.status(400).send({ message: "Incorrect OTP." });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  await Member.findOneAndUpdate(
    { email: email },
    { $set: { password: hashedPassword } }
  );

  await OTP.deleteMany({ email: email });

  res.status(200).send({ message: "Password reset successfully." });
});

module.exports = router;
