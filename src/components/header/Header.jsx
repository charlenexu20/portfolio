import React from "react";
import "./header.css";
import TypedText from "./TypedText";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import me from "../../assets/me.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="headshot">
          <img src={me} alt="me" />
        </div>
        <h5>
          Hello! My name is <span className="name-decor">Charlene Xu</span>.
        </h5>
        <h1>
          <span>I&apos;m a </span>
          <TypedText />
        </h1>
        <HeaderSocial />
        <CTA />
      </div>
    </header>
  );
};

export default Header;
