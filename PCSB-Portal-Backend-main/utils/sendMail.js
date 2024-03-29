const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const { EMAIL_PASSWORD, EMAIL_USER } = require("../config");

const registrationOtpTemplate = fs.readFileSync(
  path.resolve(__dirname, "mail_templates/registration_otp.html"),
  { encoding: "utf-8" }
);

const registrationSuccessTemplate = fs.readFileSync(
  path.resolve(__dirname, "mail_templates/registration_success.html"),
  { encoding: "utf-8" }
);

const forgotPasswordTemplate = fs.readFileSync(
  path.resolve(__dirname, "mail_templates/forgot_password.html"),
  { encoding: "utf-8" }
);

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

const sendForgotPasswordMail = (memberName, memberEmail, otp) => {
  const emailBody = forgotPasswordTemplate
    .replaceAll("$$NAME$$", memberName)
    .replaceAll("$$EMAIL$$", memberEmail)
    .replaceAll("$$OTP$$", otp)
    .replaceAll("$$MY_EMAIL$$", EMAIL_USER);

  let mailDetails = {
    from: {
      name: "PCSB Team",
      address: EMAIL_USER,
    },
    to: memberEmail,
    subject: "Forgot Password - PCSB",
    text: `Hi ${memberName},\n\nYour OTP for resetting password is ${otp}.\n\nRegards,\nPCSB Team`,
    html: emailBody,
  };

  return new Promise((resolve, reject) => {
    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const sendRegistrationOtpMail = (memberName, memberEmail, otp) => {
  const emailBody = registrationOtpTemplate
    .replaceAll("$$NAME$$", memberName)
    .replaceAll("$$EMAIL$$", memberEmail)
    .replaceAll("$$OTP$$", otp)
    .replaceAll("$$MY_EMAIL$$", EMAIL_USER);

  let mailDetails = {
    from: {
      name: "PCSB Team",
      address: EMAIL_USER,
    },
    to: memberEmail,
    subject: "Registration OTP - PCSB",
    text: `Hi ${memberName},\n\nYour OTP for registration is ${otp}.\n\nRegards,\nPCSB Team`,
    html: emailBody,
  };

  return new Promise((resolve, reject) => {
    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const sendRegistrationSuccessMail = (memberName, memberEmail) => {
  const emailBody = registrationSuccessTemplate
    .replaceAll("$$NAME$$", memberName, "g")
    .replaceAll("$$EMAIL$$", memberEmail, "g")
    .replaceAll("$$MY_EMAIL$$", EMAIL_USER, "g");

  let mailDetails = {
    from: {
      name: "PCSB Team",
      address: EMAIL_USER,
    },
    to: memberEmail,
    subject: "Registration Success - PCSB",
    text: `Hi ${memberName},\n\nYour registration is successful.\n\nRegards,\nPCSB Team`,
    html: emailBody,
  };

  return new Promise((resolve, reject) => {
    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = {
  sendForgotPasswordMail,
  sendRegistrationOtpMail,
  sendRegistrationSuccessMail,
};
