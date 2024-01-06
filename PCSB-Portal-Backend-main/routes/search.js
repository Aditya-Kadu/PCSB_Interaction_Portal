const express = require("express");
const router = express.Router();

const { Domain } = require("../models/domain");
const { Member } = require("../models/member");

router.get("/name/:name", async (req, res) => {
  const name = req.params.name;

  const members = await Member.find({
    name: { $regex: name, $options: "i" },
    isVerified: true,
    isCoreMember: false,
  }).select(
    "-__v -password -phone -linkedIn -github -additionalLinks -expertise"
  );

  const coreMembers = await Member.find({
    name: { $regex: name, $options: "i" },
    isVerified: true,
    isCoreMember: true,
  }).select(
    "-__v -password -phone -linkedIn -github -additionalLinks -expertise"
  );

  if (!members) return res.status(404).send("Member not found");

  res.status(200).send({ members, coreMembers });
});

router.get("/member/:id", async (req, res) => {
  const id = req.params.id;
  const member = await Member.findById(id).select("-__v -password");
  if (!member) return res.status(404).send("Member not found");
  res.status(200).send(member);
});

router.get("/domain/:domain", async (req, res) => {
  const domain = req.params.domain;

  const members = await Domain.find({
    name: { $regex: domain, $options: "i" },
  })
    .select("-__v")
    .populate({
      path: "expertMembers",
      select:
        "-__v -password -phone -linkedIn -github -additionalLinks -expertise",
      model: "Member",
      match: { isVerified: true },
    })
    .populate({
      path: "expertCoreMembers",
      select:
        "-__v -password -phone -linkedIn -github -additionalLinks -expertise",
      model: "Member",
      match: { isVerified: true },
    });

  if (!members) return res.status(404).send("Member not found");
  res.status(200).send(members);
});

router.get("/expertise/:expertise", async (req, res) => {
  const expertise = req.params.expertise;

  const members = await Domain.find({
    expertise: { $regex: expertise, $options: "i" },
  })
    .select("-__v")
    .populate({
      path: "expertMembers",
      select:
        "-__v -password -phone -linkedIn -github -additionalLinks -expertise",
      model: "Member",
      match: { isVerified: true },
    })
    .populate({
      path: "expertCoreMembers",
      select:
        "-__v -password -phone -linkedIn -github -additionalLinks -expertise",
      model: "Member",
      match: { isVerified: true },
    });

  if (!members) return res.status(404).send("Member not found");
  res.status(200).send(members);
});

// /search?name=abc&domain=xyz&expertise=abc
router.get("/", async (req, res) => {
  let { name, domain, expertise } = req.query;

  if (!name) name = "";
  if (!domain) domain = "";
  if (!expertise) expertise = "";

  const filteredDomains = await Domain.find({
    name: { $regex: domain, $options: "i" },
    expertise: { $regex: expertise, $options: "i" },
  }).select("-__v");

  const filteredMembers = await Member.find({
    name: { $regex: name, $options: "i" },
    isVerified: true,
  }).select(
    "-__v -password -phone -linkedIn -github -additionalLinks -expertise"
  );

  const members = [];

  filteredDomains.forEach((domain) => {
    domain.expertMembers.forEach((value, key) => {
      filteredMembers.forEach((member) => {
        if (value.includes(member.id)) {
          members.push(member);
        }
      });
    });
    domain.expertCoreMembers.forEach((value, key) => {
      filteredMembers.forEach((member) => {
        if (value.includes(member.id)) {
          members.push(member);
        }
      });
    });
  });

  if (!members) return res.status(404).send("Member not found");
  res.status(200).send(members);
});

module.exports = router;
