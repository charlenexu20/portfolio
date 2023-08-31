import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        className="header__socials--decor"
        href="https://github.com/charlenexu20"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <span className="header__socials--separator">|</span>
      <a
        className="header__socials--decor"
        href="https://www.linkedin.com/in/charlene-xu-sl/"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin />
      </a>
      <span className="header__socials--separator">|</span>
      <a
        className="header__socials--decor"
        href="mailto:charlenexu.dev@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <TfiEmail />
      </a>
    </div>
  );
};

export default HeaderSocial;
