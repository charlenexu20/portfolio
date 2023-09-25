import React, { useState } from "react";
import "./portfolio.css";
import wandrrrImg from "../../assets/wandrrrImg.png";
import wandrrrGif from "../../assets/wandrrrGif.gif";
import taskverseImg from "../../assets/taskverseImg.png";
import taskverseGif from "../../assets/taskverseGif.gif";
import carImg from "../../assets/carImg.png";
import carGif from "../../assets/carGif.gif";
import wardrobifyImg from "../../assets/wardrobifyImg.png";
import wardrobifyGif from "../../assets/wardrobifyGif.gif";
import {
  BiLogoReact,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoDocker,
  BiLogoDjango,
  BiLogoPython,
  BiLogoHtml5,
  BiLogoCss3,
} from "react-icons/bi";
import { SiFastapi, SiSqlite } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import ProjectModal from "./ProjectModal";
import { Fade } from "react-awesome-reveal";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "Wandrrr",
      img: wandrrrImg,
      gif: wandrrrGif,
      description:
        "Wandrrr is a web application for individuals who are interested in documenting their journeys in a beautiful and organized way. The platform allows users to add and delete journals from their list of journals. Wandrrr also allows users to view their list at a glance, view individual journal in detail, and update their content.",
      technologies: [
        <BiLogoReact key="react" />,
        <SiFastapi key="fastapi" />,
        <BiLogoPostgresql key="postgresql" />,
        <BiLogoTailwindCss key="tailwindcss" />,
        <BiLogoDocker key="docker" />,
      ],
      button: "https://github.com/charlenexu20/wandrrr",
    },
    {
      id: 2,
      title: "CarCar",
      img: carImg,
      gif: carGif,
      description:
        "CarCar is an inventory management solution tailored for dealerships. It offers an all-inclusive platform for creating and managing automobile records, service histories, and sales transactions.",
      technologies: [
        <BiLogoDjango key="django" />,
        <BiLogoReact key="react" />,
        <BiLogoPostgresql key="postgresql" />,
        <BsFillBootstrapFill key="bootstrap" />,
        <BiLogoDocker key="docker" />,
      ],
      button: "https://github.com/charlenexu20/car-car",
    },
    {
      id: 3,
      title: "Wardrobify",
      img: wardrobifyImg,
      gif: wardrobifyGif,
      description:
        "Wardrobify is a user-friendly digital tool designed to simplify the management of your hat and shoe collections. This platform empowers users to effortlessly organize their existing assortments by adding or removing items from their virtual wardrobes. Users can easily view their collections at a glance and swiftly locate specific items.",
      technologies: [
        <BiLogoDjango key="django" />,
        <BiLogoReact key="react" />,
        <BiLogoPostgresql key="postgresql" />,
        <BsFillBootstrapFill key="bootstrap" />,
        <BiLogoDocker key="docker" />,
      ],
      button: "https://github.com/charlenexu20/wardrobify",
    },
    {
      id: 4,
      title: "TaskVerse",
      img: taskverseImg,
      gif: taskverseGif,
      description:
        "TaskVerse is a project and task manager application. It's composed of projects, tasks, and the ability to log in, log out, and sign up for the application. ",
      technologies: [
        <BiLogoPython key="python" />,
        <BiLogoDjango key="django" />,
        <BiLogoHtml5 key="html" />,
        <BiLogoCss3 key="css" />,
        <SiSqlite key="sqlite3" />,
      ],
      button: "https://github.com/charlenexu20/taskverse",
    },
  ];

  return (
    <Fade triggerOnce duration={1500} fraction={0.3}>
      <section id="portfolio" className="portfolio">
        <h2 className="portfolio__title">Portfolio</h2>
        <div className="container portfolio__container">
          {projects.map((project) => (
            // eslint-disable-next-line
            <div
              className="portfolio__card"
              key={project.id}
              onClick={() => openModal(project)}
            >
              <div className="portfolio__card-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="portfolio__card-content">
                <div className="portfolio__card-header">
                  <h3 className="project__title">{project.title}</h3>
                  <div className="project__icons">{project.technologies}</div>
                </div>
              </div>
              <div className="portfolio__cta">
                <a
                  href={project.button}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  &lt; See code /&gt;
                </a>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            closeModal={closeModal}
          />
        )}
      </section>
    </Fade>
  );
};

export default Portfolio;
