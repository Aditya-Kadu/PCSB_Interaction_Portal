import React, { useState } from "react";
import "../styles/ForgotPassword.css";
import backendUrl from "..";
import { set } from "mongoose";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isotpVerified, setIsotpVerified] = useState(false);
  const [pwdupdated, setPwdUpdated] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    // Perform email verification logic here
    // For simplicity, let's assume it's verified
    let requestData = {
      email,
    };

    let result = await fetch(`${backendUrl}/api/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    result = await result.json;
    setIsEmailVerified(true);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    // Perform OTP verification logic here
    // For simplicity, let's assume it's verified
    let requestData1 = {
      email,
      otp,
    };

    let result1 = await fetch(`${backendUrl}/api/forgot-password/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData1),
    });
    result1 = await result1.json();
    alert("Email and OTP verified successfully!");
    setIsotpVerified(true);
    setPwdUpdated(true);
  };

  const handlePwdChange = async (e) => {
    e.preventDefault();
    let requestData2 = {
      email,
      otp,
      password,
    };
    let result2 = await fetch(`${backendUrl}/api/forgot-password/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData2),
    });
    result2 = await result2.json();
    alert("Password changed successfully!");
    setPwdUpdated(false);
    navigate("/register");
  };

  return (
    <div className="wrapper">
      <div className="email-verification-container">
        <div className="email-verification-text">
          <label className="email-head-text">Email Verification</label>
        </div>
        {!isEmailVerified ? (
          <form onSubmit={handleEmailSubmit}>
            <label htmlFor="email" className="enter-otp-text">
              Enter your email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send OTP</button>
          </form>
        ) : (
          <div></div>
        )}
        {isEmailVerified && !isotpVerified ? (
          <form onSubmit={handleOtpSubmit}>
            <label htmlFor="otp" className="enter-otp-text">
              Enter OTP:
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              required
            />
            <button type="submit">Verify</button>
          </form>
        ) : (
          <div></div>
        )}
        {pwdupdated ? (
          <form onSubmit={handlePwdChange}>
            <label htmlFor="email" className="enter-otp-text">
              Enter new Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Reset </button>
          </form>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
