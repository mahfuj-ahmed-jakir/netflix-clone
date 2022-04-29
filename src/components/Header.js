import React, { useEffect, useState } from "react";
import netflixImg from "../images/netflix.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
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
        <button onClick={() => navigate("/login")}>Sign In</button>
      </div>
    </header>
  );
};

export default Header;
