const express = require("express");

const domains = require("../routes/domains");
const login = require("../routes/login");
const search = require("../routes/search");
const register = require("../routes/register");
const forgotPassword = require("../routes/forgot_password");

const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/register", register);
  app.use("/api/login", login);
  app.use("/api/domains", domains);
  app.use("/api/search", search);
  app.use("/api/forgot-password", forgotPassword);
  app.use(error);
};
