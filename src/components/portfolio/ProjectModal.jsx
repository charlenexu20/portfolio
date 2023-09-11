import React from "react";
import Modal from "react-modal";
import wandrrrGif from "../../assets/wandrrrGif.gif";
import { IoClose } from "react-icons/io5";

const ProjectModal = ({ project, isOpen, closeModal }) => {
  return (
    <Modal
      className="project__modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      contentLabel="Project Modal"
    >
      <div className="project__modal-content">
        <button onClick={closeModal} className="project__modal-btn">
          <IoClose />
        </button>
        <img
          className="project__modal-img"
          src={wandrrrGif}
          alt={`${project.title} Demo`}
        />
        <div className="project__modal-details">
          <div className="project__modal-header">
            <h2 className="project__modal-title">{project.title}</h2>
            <div className="project__modal-icons">{project.technologies}</div>
          </div>
          <p className="project__modal-description">{project.description}</p>
          <div className="project__modal-cta">
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
      </div>
    </Modal>
  );
};

export default ProjectModal;
