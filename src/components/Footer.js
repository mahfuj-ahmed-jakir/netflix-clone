import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <p className="footer_tt">Questions? Contact us.</p>
        <div className="footer_bar">
          <div className="footer_items">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>
          <div className="footer_items">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Notices</a>
          </div>
          <div className="footer_items">
            <a href="#">Account</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </div>
          <div className="footer_items">
            <a href="#">Media Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
