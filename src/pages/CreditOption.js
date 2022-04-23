import React from "react";
import "./CreditOption.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaCcVisa, FaCcMastercard, FaCreditCard } from "react-icons/fa";

const CreditOption = () => {
  return (
    <>
      <Header />
      <section className="reg_form">
        <div className="container">
          <div className="reg_form_con">
            <p>
              STEP 3 OF <strong>3</strong>
            </p>
            <h5>Set up your credit or debit card</h5>
            <h6>This is a demo website, so give here wrong information.</h6>
            <span>
              <FaCcVisa />
              <FaCcMastercard />
              <FaCreditCard />
            </span>
            <form className="reg_form_sub">
              <input type="email" placeholder="First name"></input>
              <p>Please enter a first name.</p>
              <input type="password" placeholder="Last name"></input>
              <input type="password" placeholder="Card number"></input>
              <p>Please enter a card number.</p>
              <input type="password" placeholder="Expiration date (MM/YY)"></input>
              <p>Please enter an expiration month.</p>
              <input type="password" placeholder="Security code (CVV)"></input>
              <p>Please enter a security code (CVV).</p>
              <p style={paraStyle}>By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently USD3.99/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.</p>
              <button>Start Membership</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

let paraStyle = {
  color: "#ddd",
  margin: "20px 0 40px",
  textAlign: "justify",
};

export default CreditOption;
