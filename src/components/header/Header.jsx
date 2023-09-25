import React from "react";
import "./header.css";
import TypedText from "./TypedText";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import me from "../../assets/me.jpg";
import { Fade } from "react-awesome-reveal";
import IrregularShapes from "./IrregularShaped";

const Header = () => {
  return (
    <Fade triggerOnce duration={1800} fraction={0.5}>
      <header id="home">
        <div className="container header__container">
          <IrregularShapes />
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
    </Fade>
  );
};

export default Header;
