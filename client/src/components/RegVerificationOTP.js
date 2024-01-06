import React, { useState } from "react";
import "../styles/ForgotPassword.css";
import backendUrl from "..";
import { useNavigate } from "react-router-dom";
import { Email_Id } from "./login";

const RegEmailVerification = () => {
  //   const email = Email_Id;
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  //   const handleEmailSubmit = async (e) => {
  //     e.preventDefault();
  //     // Perform email verification logic here
  //     // For simplicity, let's assume it's verified
  //     let requestData = {
  //       email,
  //     };

  //     let result = await fetch(`${backendUrl}/api/forgot-password`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(requestData),
  //     });
  //     result = await result.json;
  //     setIsEmailVerified(true);
  //   };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    // Perform OTP verification logic here
    // For simplicity, let's assume it's verified
    // alert(Email_Id);
    let requestData1 = {
      email: Email_Id,
      otp,
    };
    console.log(requestData1);
    let result1 = await fetch(`${backendUrl}/api/register/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData1),
    });
    result1 = await result1.json();
    alert("Email and OTP verified successfully!");
    // setIsotpVerified(true);
    console.log(result1);
    localStorage.setItem("member", JSON.stringify(result1));
    navigate("/complete-profile");
  };

  return (
    <div className="wrapper">
      <div className="email-verification-container">
        <div className="email-verification-text">
          <label className="email-head-text">Email Verification</label>
        </div>

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
      </div>
    </div>
  );
};

export default RegEmailVerification;
