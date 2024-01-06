import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginSignUp from "./components/login";
import ProfileEditForm from "./components/CompleteMyProfile";
import EmailVerification from "./components/ForgotPassword";
import RegEmailVerification from "./components/RegVerificationOTP";
import Cards from "./components/Cards";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const backendUrl = "https://13.233.17.93:9090";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <LoginSignUp />,
  },
  {
    path: "/complete-profile",
    element: <ProfileEditForm />,
  },
  {
    path: "/register/forgot-password",
    element: <EmailVerification />,
  },
  {
    path: "/register/verify-otp",
    element: <RegEmailVerification />,
  },
  {
    path: "/search/cards",
    element: <Cards />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LoginSignUp /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default backendUrl;
