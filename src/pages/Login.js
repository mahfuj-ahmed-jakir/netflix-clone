import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";
import firebaseConfig from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

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

  let handleSignIn = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Please enter a valid email or phone number.");
    } else if (!password) {
      setErrPassword("Your password must contain between 4 and 60 characters.");
    } else {
      setErrEmail("");
      setErrPassword("");
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          navigate("/");
        })
        .catch((error) => {
          if (error.code == "auth/user-not-found") {
            setErrPassword("User not found!");
          } else if (error.code == "auth/invalid-email") {
            setErrPassword("Invalid email!");
          } else if (error.code == "auth/wrong-password") {
            setErrPassword("Wrong password!");
          } else {
            setErrPassword("");
          }
        });
    }
  };

  let handleGoogleLogin = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <>
      <Header />
      <div className="login">
        <div className="container loginTop">
          <div className="loginCon">
            <p className="loginTopPara">Sign In</p>
            <form className="loginForm">
              <input onChange={handleEmail} type="email" placeholder="Email"></input>
              <p>{errEmail}</p>
              <input onChange={handlePassword} type="password" placeholder="Password"></input>
              <p>{errPassword}</p>
              <button onClick={handleSignIn}>Sign In</button>
            </form>
            <div onClick={handleGoogleLogin} className="googleLoginBtn">
              <FcGoogle />
              <p>Login with Google</p>
            </div>
            <Link className="signUpBtn" to="/home">
              <span>New to Netflix?</span> Sign up now.
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
