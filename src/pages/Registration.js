import React from "react";
import "./Registration.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  let handleNext = () => {
    navigate("/planform");
  };

  return (
    <>
      <Header />
      <section className="reg_last_step">
        <div className="container">
          <div className="reg_last_con">
            <TiTick className="tick" />
            <p>
              STEP 2 OF <strong>3</strong>
            </p>
            <h5>Choose your plan.</h5>
            <h6>
              <TiTick className="tick_text" /> Just a few more steps and you're done! We hate paperwork, too.
            </h6>
            <h6>
              <TiTick className="tick_text" /> Everything on Netflix for one low price.
            </h6>
            <h6>
              <TiTick className="tick_text" /> No ads and no extra fees. Ever.
            </h6>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Registration;
