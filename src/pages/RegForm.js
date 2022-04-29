import React, { useState } from "react";
import "./RegForm.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "firebase/auth";

const RegForm = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [errEmail, setErrEmail] = useState("");
  let [errPassword, setErrPassword] = useState("");

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Email is required!");
    } else if (!password) {
      setErrPassword("Password should be between 6 and 60 characters!");
    } else {
      setErrEmail("");
      setErrPassword("");
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          sendEmailVerification(auth.currentUser);
          // Email verification sent!
          navigate("/registration");
        })
        .catch((error) => {
          if (error.code == "auth/email-already-in-use") {
            setErrPassword("This email already in use!");
          } else if (error.code == "auth/invalid-email") {
            setErrPassword("Invalid email!");
          } else {
            setErrPassword("");
          }
        });
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/");
    }
  });

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
              <input onChange={handleEmail} type="email" placeholder="Email"></input>
              <p>{errEmail}</p>
              <input onChange={handlePassword} type="password" placeholder="Add a passord"></input>
              <p>{errPassword}</p>
              <button onClick={handleSubmit}>Next</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RegForm;
