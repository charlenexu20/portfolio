import React, { useState } from "react";
import "./portfolio.css";
import wandrrrImg from "../../assets/wandrrrImg.png";
import wandrrrGif from "../../assets/wandrrrGif.gif";
import carImg from "../../assets/carImg.png";
import carGif from "../../assets/carGif.gif";
import {
  BiLogoReact,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoDocker,
  // BiLogoDjango,
  // BsFillBootstrapFill,
  // BiLogoPython,
  // BiLogoHtml5,
  // BiLogoCss3,
} from "react-icons/bi";
import { SiFastapi } from "react-icons/si";
import ProjectModal from "./ProjectModal";

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
        <BiLogoReact key="react" />,
        <SiFastapi key="fastapi" />,
        <BiLogoPostgresql key="postgresql" />,
        <BiLogoTailwindCss key="tailwindcss" />,
        <BiLogoDocker key="docker" />,
      ],
      button: "https://github.com/charlenexu20/car-car",
    },
    {
      id: 3,
      title: "To-Do",
      img: wandrrrImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
      technologies: [
        <BiLogoReact key="react" />,
        <SiFastapi key="fastapi" />,
        <BiLogoPostgresql key="postgresql" />,
        <BiLogoTailwindCss key="tailwindcss" />,
        <BiLogoDocker key="docker" />,
      ],
      button: "#",
    },
    {
      id: 4,
      title: "To-Do",
      img: wandrrrImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
      technologies: [
        <BiLogoReact key="react" />,
        <SiFastapi key="fastapi" />,
        <BiLogoPostgresql key="postgresql" />,
        <BiLogoTailwindCss key="tailwindcss" />,
        <BiLogoDocker key="docker" />,
      ],
      button: "#",
    },
  ];

  return (
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
  );
};

export default Portfolio;
