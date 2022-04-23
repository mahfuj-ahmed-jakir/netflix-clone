import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <Header />
      <div className="login">
        <div className="container loginTop">
          <div className="loginCon">
            <p className="loginTopPara">Sign In</p>
            <form className="loginForm">
              <input type="email" placeholder="Email"></input>
              <p>Please enter a valid email or phone number.</p>
              <input type="password" placeholder="Password"></input>
              <p>Your password must contain between 4 and 60 characters.</p>
              <button>Sign In</button>
            </form>
            <div className="googleLoginBtn">
              <FcGoogle />
              <p>Login with Google</p>
            </div>
            <a className="signUpBtn" href="#">
              <span>New to Netflix?</span> Sign up now.
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
