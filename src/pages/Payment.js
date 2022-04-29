import React from "react";
import "./Payment.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaCcVisa, FaCcMastercard, FaCreditCard } from "react-icons/fa";
import { CgLock } from "react-icons/cg";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  let handleNext = () => {
    navigate("/creditoption");
  };

  return (
    <>
      <Header />
      <section className="reg_pay_step">
        <div className="container">
          <div className="reg_pay_con">
            <CgLock className="lock_icon" />
            <p>
              STEP 2 OF <strong>3</strong>
            </p>
            <h5>Set up your payment</h5>
            <h6>Your membership starts as soon as you set up payment.</h6>
            <h4>This a demo website. You don't need payment</h4>
            <div onClick={handleNext} className="pay_sec">
              <div className="pay_sec_left">
                <span>Credit or Debit Card</span>
                <FaCcVisa className="pay_icons" />
                <FaCcMastercard className="pay_icons" />
                <FaCreditCard className="pay_icons" />
              </div>
              <div className="pay_sec_right">
                <AiOutlineRight />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Payment;
