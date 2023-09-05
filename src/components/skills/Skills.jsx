import React from "react";
import "./skills.css";
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoCss3,
  BiLogoJquery,
  BiLogoDjango,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoDocker,
  BiLogoFigma,
  BiLogoHtml5,
  BiLogoPython,
} from "react-icons/bi";
import { FaBootstrap, FaNodeJs, FaSass, FaNpm } from "react-icons/fa";
import { SiExpress, SiFastapi, SiPostgresql, SiVitest } from "react-icons/si";

const skillsData = [
  { icon: <BiLogoJavascript />, title: "Javascipt" },
  { icon: <BiLogoReact />, title: "React" },
  { icon: <BiLogoTailwindCss />, title: "Tailwind" },
  { icon: <FaBootstrap />, title: "Bootstrap" },
  { icon: <BiLogoCss3 />, title: "CSS" },
  { icon: <BiLogoPython />, title: "Python" },
  { icon: <BiLogoDjango />, title: "Django" },
  { icon: <SiPostgresql />, title: "PostgreSQL" },
  { icon: <SiFastapi />, title: "FastAPI" },
  { icon: <BiLogoHtml5 />, title: "HTML" },
  { icon: <FaNodeJs />, title: "Node.js" },
  { icon: <SiExpress />, title: "Express" },
  { icon: <BiLogoMongodb />, title: "MongoDB" },
  { icon: <BiLogoJquery />, title: "JQuery" },
  { icon: <FaSass />, title: "Sass" },
  { icon: <BiLogoGit />, title: "Git" },
  { icon: <BiLogoDocker />, title: "Docker" },
  { icon: <SiVitest />, title: "Vite" },
  { icon: <BiLogoFigma />, title: "Figma" },
  { icon: <FaNpm />, title: "NPM" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="container skills__container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skills__list">
            <div className="skills__list-icon">{skill.icon}</div>
            <small className="skills__list-name">{skill.title}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
