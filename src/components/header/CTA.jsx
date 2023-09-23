import React from "react";
import CV from "../../assets/CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" rel="noopener noreferrer" className="btn">
        RESUME
      </a>
      <a href="#contact" className="btn btn-primary">
        MESSAGE ME
      </a>
    </div>
  );
};

export default CTA;
