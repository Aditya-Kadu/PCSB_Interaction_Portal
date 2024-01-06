import React, { Component } from "react";
import logo from "../images/image.jpeg";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black py-1 fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                className="logo"
                src={logo}
                height={80}
                width={80}
                alt="logo"
              />
            </a>
            <div className="navbar-brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
                onClick={() => {
                  const auth = localStorage.getItem("member");
                  if (!auth) {
                    window.location.href = "/register";
                  } else {
                    window.location.href = "/complete-profile";
                  }
                }}
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
