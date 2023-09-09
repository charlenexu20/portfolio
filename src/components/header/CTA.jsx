import React from "react";
import CV from "../../assets/sample_cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        RESUME
      </a>
      <a href="#contact" className="btn btn-primary">
        MESSAGE ME
      </a>
    </div>
  );
};

export default CTA;
