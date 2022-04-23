import React, { useEffect, useState } from "react";
import netflixImg from "../images/netflix.png";
import "./Header.css";

const Header = () => {
  let [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <header className={`headerHead ${show && "header_nav"}`}>
      <div className={`container headerCon ${show && "headerCon_nav"}`}>
        <img src={netflixImg} alt="Netflix Clone" />
        <button>Sign In</button>
      </div>
    </header>
  );
};

export default Header;
