import React from "react";
import CV from "../../assets/sample_cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Resume
      </a>
      <a href="#contact" className="btn">
        Message Me
      </a>
    </div>
  );
};

export default CTA;
