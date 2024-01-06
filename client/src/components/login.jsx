import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import Navbar from "./Navbar";
import backendUrl from "..";

var Email_Id;

const LoginSignUp = () => {

    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [login_password, setLogPassword] = useState("");
    const [login_email, setLogEmail] = useState("");

    const navigate = useNavigate();

  useEffect(() => {
    const switchers = document.querySelectorAll(".switcher");

    switchers.forEach((item) => {
      item.addEventListener("click", function () {
        switchers.forEach((item) =>
          item.parentElement.classList.remove("is-active")
        );
        this.parentElement.classList.add("is-active");
      });
    });

    // Remove event listeners when the component is unmounted
    return () => {
      switchers.forEach((item) => {
        item.removeEventListener("click", function () {
          switchers.forEach((item) =>
            item.parentElement.classList.remove("is-active")
          );
          this.parentElement.classList.add("is-active");
        });
      });
    };
  }, []); // Empty dependency array ensures that the effect runs only once after the initial render

  const login = async () => {
    // alert("Login Successful");
    let requestData1 = {
        email: login_email,
        password: login_password
    }
    console.log(requestData1)
    let result1 = await fetch(`${backendUrl}/api/login`, {
        method: "POST",
        body: JSON.stringify(requestData1),
        headers: {
            "Content-Type": "application/json",
        },
    })
    result1 = await result1.json();
    // Set to local storage after verifying otp
    localStorage.setItem("member", JSON.stringify(result1));

    console.log(result1);
    // navigate("/")
    // navigate, Go to otp
  }

  const signup = async () => {
    // alert("Sign Up Successful");
    
    let requestData= {
        name,
        password,
        email
    }

    let result = await fetch(`${backendUrl}/api/register`, {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
            "Content-Type": "application/json",
        },
    });
    result = await result.json();
    // Set to local storage after verifying otp
    // localStorage.setItem("member", JSON.stringify(result));
    Email_Id = email;
    // alert(Email_Id)
    console.log(result);
    // navigate, Go to otp

  }

  return (
    <div>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section className="forms-section">
        <h1 className="section-title">Login & Signup</h1>
        <div className="forms">
            <div className="form-wrapper is-active">
            <button type="button" className="switcher switcher-login">
                Login
                <span className="underline"></span>
            </button>
            <form className="form form-login">
                <fieldset>
                <legend>Please, enter your email and password for login.</legend>
                <div className="input-block">
                    <label htmlFor="login-email">E-mail</label>
                    <input id="login-email" type="email" value={login_email} onChange={(e)=>setLogEmail(e.target.value)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="login-password">Password</label>
                    <input id="login-password" type="password" value={login_password} onChange={(e)=>setLogPassword(e.target.value)} required />
                </div>
                <div className="forgot-password">
                    <a href="/register/forgot-password">Forgot Password?</a>
                </div>
                </fieldset>
                <button type="submit" className="btn-login" onClick={() =>{
                    login();
                    navigate("/")
                }}>
                Login
                </button>
            </form>
            </div>
            <div className="form-wrapper">
            <button type="button" className="switcher switcher-signup">
                Sign Up
                <span className="underline"></span>
            </button>
            <form className="form form-signup">
                <fieldset>
                <legend>
                    Please, enter your email, password, and password confirmation
                    for sign up.
                </legend>
                <div className="input-block">
                    <label htmlFor="signup-username">Username</label>
                    <input id="signup-username" type="text" value={name} onChange={(e)=>setUsername(e.target.value)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="signup-email">E-mail</label>
                    <input id="signup-email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="signup-password">Password</label>
                    <input id="signup-password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                </fieldset>
                <button type="submit" className="btn-signup" onClick={() =>{
                    signup();
                    navigate("/register/verify-otp");
                }}>
                Sign Up
                </button>
            </form>
            </div>
        </div>
        </section>
    </div>
  );
};

export default LoginSignUp;
export {Email_Id};
