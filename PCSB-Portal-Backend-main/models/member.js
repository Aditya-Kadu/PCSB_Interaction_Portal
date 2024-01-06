const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const { JWT_PRIVATE_KEY } = require("../config");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  isCoreMember: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 11,
  },
  linkedIn: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  github: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  additionalLinks: {
    type: Map,
    of: String,
  },
  expertise: {
    type: Map,
    of: [String],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

memberSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      isCoreMember: this.isCoreMember,
    },
    JWT_PRIVATE_KEY
  );
  return token;
};

const Member = mongoose.model("Member", memberSchema);

function validateMember(member) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024),
    description: Joi.string().min(0).default(""),
    isCoreMember: Joi.boolean(),
    image: Joi.string().min(0).default(""),
    phone: Joi.string().min(10).max(11),
    linkedIn: Joi.string().min(5).max(255),
    github: Joi.string().min(5).max(255),
    additionalLinks: Joi.object(),
    expertise: Joi.object(),
  });

  return schema.validate(member);
}

exports.Member = Member;
exports.validate = validateMember;
