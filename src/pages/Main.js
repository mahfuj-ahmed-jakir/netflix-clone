import React from "react";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Main = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log(user);
    } else {
      // User is signed out
      navigate("/home");
    }
  });

  let handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div>
      <button style={btn} onClick={handleSignOut}>
        Log Out
      </button>
      <h1 style={text}>This site under construction. Please visit later!</h1>
    </div>
  );
};

export default Main;

let btn = {
  padding: "10px 20px",
  background: "crimson",
  borderRadius: "5px",
  color: "#ffffff",
  fontSize: "20px",
  margin: "20px",
  cursor: "pointer",
};

let text = {
  padding: "10px 20px",
  background: "blue",
  borderRadius: "5px",
  color: "#ffffff",
  fontSize: "20px",
  margin: "0 20px",
};
