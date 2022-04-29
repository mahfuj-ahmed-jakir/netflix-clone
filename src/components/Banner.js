import React, { useState } from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [err, setErr] = useState("");

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    navigate("/registrationstep");
    setErr("");
  };

  return (
    <div className="banner">
      <div className="container bannerCon">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
        <form>
          <div className="signupForm">
            <input onChange={handleEmail} placeholder="Email address" type="email"></input>
            <button onClick={handleSubmit} email={email}>
              Get Started
            </button>
            <p className="singupWarning">{err}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
