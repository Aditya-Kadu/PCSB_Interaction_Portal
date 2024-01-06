const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("lodash");

const { Member } = require("../models/member");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send({ message: "Please provide email/password" });

  const member = await Member.findOne({ email: email });
  if (!member)
    return res.status(400).send({ message: "Member does not exist." });

  const validPassword = await bcrypt.compare(password, member.password);
  if (!validPassword)
    return res.status(400).send({ message: "Incorrect password." });

  const token = member.generateAuthToken();

  res
    .status(200)
    .header("x-auth-token", token)
    .send(
      _.pick(member, [
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
