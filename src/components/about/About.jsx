import React from "react";
import "./about.css";
import charlene from "../../assets/charlene.jpg";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <Fade triggerOnce duration={1500} fraction={0.4}>
      <section id="about" className="about">
        <h2 className="about__title">About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={charlene} alt="about-me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__content-text">
              <p>
                🌴 Hey there, I&apos;m a software engineer based in sunny
                Southern California, dedicated to writing clean and efficient
                code that breaks barriers in our world and fosters direct
                communication between people. I believe that every line of code
                has the potential to make a positive impact.
              </p>
              <p>
                What excites me most is solving complex problems through
                technology. They say, &quot;If you love what you do, you&apos;ll
                never work a day in your life,&quot; and that&apos;s how I feel
                about being a software engineer.
              </p>
              <p>
                Let&apos;s build a better world, one line of code at a time!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default About;
