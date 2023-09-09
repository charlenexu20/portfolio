import React from "react";
import "./footer.css";
import { BsSuitHeartFill } from "react-icons/bs";
import HeaderSocial from "../header/HeaderSocial";

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer>
      <HeaderSocial customClass="footer__social" />
      <div className="footer__copyright">
        <small>
          &copy; CX {getYear()}. Made with{" "}
          <BsSuitHeartFill className="footer__copyright-icon" /> by Charlene Xu
        </small>
      </div>
    </footer>
  );
};

export default Footer;
