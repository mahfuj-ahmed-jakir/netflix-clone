import React, { useState } from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container bannerCon">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
        <form>
          <div className="signupForm">
            <input placeholder="Email address" type="email"></input>
            <button>Get Started</button>
            <p className="singupWarning">Email is required!</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
