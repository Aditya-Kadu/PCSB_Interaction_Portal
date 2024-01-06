const mongoose = require("mongoose");

const domainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  expertise: {
    type: [String],
    default: [],
  },
  expertCoreMembers: {
    type: Map,
    of: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
        default: [],
      },
    ],
    default: {},
  },
  expertMembers: {
    type: Map,
    of: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
        default: [],
      },
    ],
    default: {},
  },
});

domainSchema.index({ name: 1, expertise: 1 });

const Domain = mongoose.model("Domain", domainSchema);

const addDomain = async (name) => {
  const domain = new Domain({
    name,
    expertise: [],
    expertCoreMembers: {},
    expertMembers: {},
  });

  await domain.save();

  return domain;
};

exports.Domain = Domain;
exports.addDomain = addDomain;
