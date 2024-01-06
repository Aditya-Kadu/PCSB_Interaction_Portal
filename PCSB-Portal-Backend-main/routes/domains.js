const express = require("express");
const router = express.Router();

const { Domain, validate, addDomain } = require("../models/domain");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const domains = await Domain.find().select(
    "-__v -expertMembers -expertCoreMembers"
  );
  res.status(200).send(domains);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res.status(400).send({
      message: error.details[0].message,
    });

  const { name } = req.body;

  const domainExists = await Domain.findOne({ name });
  if (domainExists)
    return res.status(400).send({
      message: "Domain already exists.",
    });

  const domain = await addDomain(name);

  res.status(200).send(domain);
});

module.exports = router;
