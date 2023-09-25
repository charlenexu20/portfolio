import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

const IrregularShapes = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Update cursor position on mouse move
  const handleMouseMove = (e) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
    });
  };

  // Use react-spring for shape animations
  const [shape1Props, setShape1Props] = useSpring(() => ({
    transform: "translateX(0px) translateY(0px) rotate(0deg)",
    zIndex: 1,
  }));

  const [shape2Props, setShape2Props] = useSpring(() => ({
    transform: "translateX(0px) translateY(0px) rotate(0deg)",
    zIndex: 2,
  }));

  const [shape3Props, setShape3Props] = useSpring(() => ({
    transform: "translateX(0px) translateY(0px) rotate(0deg)",
    zIndex: 3,
  }));

  // Update shape positions based on cursor and rotation
  useEffect(() => {
    const { x, y } = cursorPosition;

    setShape1Props({
      transform: `translateX(${x * 0.03}px) translateY(${y * 0.03}px) rotate(${
        x * 0.2
      }deg)`,
      zIndex: 1,
    });

    setShape2Props({
      transform: `translateX(${x * 0.03}px) translateY(${y * 0.03}px) rotate(${
        y * 0.2
      }deg)`,
      zIndex: 2,
    });

    setShape3Props({
      transform: `translateX(${x * 0.03}px) translateY(${y * 0.03}px) rotate(${
        (x + y) * 0.1
      }deg)`,
      zIndex: 3,
    });
  }, [cursorPosition, setShape1Props, setShape2Props, setShape3Props]);

  // Function to move the shapes continuously
  const moveShapesContinuously = () => {
    setCursorPosition((prevPosition) => ({
      x: prevPosition.x + 0.5,
      y: prevPosition.y + 0.5,
    }));
  };

  // Start moving the shapes continuously
  useEffect(() => {
    const moveInterval = setInterval(moveShapesContinuously, 5); // Adjust the interval speed

    return () => {
      clearInterval(moveInterval);
    };
  }, []);

  return (
    <div
      className="irregular-shapes"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <animated.div
        className="shape1"
        style={{
          transform: shape1Props.transform,
          zIndex: shape1Props.zIndex,
        }}
      ></animated.div>
      <animated.div
        className="shape2"
        style={{
          transform: shape2Props.transform,
          zIndex: shape2Props.zIndex,
        }}
      ></animated.div>
      <animated.div
        className="shape3"
        style={{
          transform: shape3Props.transform,
          zIndex: shape3Props.zIndex,
        }}
      ></animated.div>
    </div>
  );
};

export default IrregularShapes;
