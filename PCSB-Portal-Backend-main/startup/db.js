const mongoose = require("mongoose");

const { DB_URL } = require("../config");

module.exports = function () {
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."));
};
