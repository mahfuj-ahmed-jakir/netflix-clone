import React from "react";
import "./RegStepScene.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BsLaptop, BsTablet } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RegStepScene = () => {
  let navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="reg_step_scene">
        <div className="container reg_step_con">
          <div className="reg_step_con_icons">
            <BsLaptop />
            <RiComputerLine />
            <BsTablet />
            <FaMobileAlt />
          </div>
          <p>
            STEP 1 OF <strong>3</strong>
          </p>
          <h5>Finish setting up your account</h5>
          <h6>Netflix is personalized for you. Create a password to watch on any device at any time.</h6>
          <button onClick={() => navigate("/registrationform")}>Next</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RegStepScene;
