import React from "react";
import "./RegForm.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RegForm = () => {
  return (
    <>
      <Header />
      <section className="reg_form">
        <div className="container">
          <div className="reg_form_con">
            <p>
              STEP 1 OF <strong>3</strong>
            </p>
            <h5>Create a password to start your membership</h5>
            <h6>Just a few more steps and you're done! We hate paperwork, too.</h6>
            <form className="reg_form_sub">
              <input type="email" placeholder="Email"></input>
              <p>Email is required!</p>
              <input type="password" placeholder="Add a passord"></input>
              <p>Password should be between 6 and 60 characters</p>
              <button>Next</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RegForm;
