import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Web Developer.",
        "Software Engineer.",
        "Dog Mom.",
        "Cat Mama.",
      ],
      typeSpeed: 90,
      backSpeed: 80,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedRef}></span>;
};

export default TypedText;
