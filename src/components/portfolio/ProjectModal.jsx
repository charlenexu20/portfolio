import React from "react";
import Modal from "react-modal";
import placeholder from "../../assets/placeholder.jpg";
import { IoClose } from "react-icons/io5";
// import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ project, isOpen, closeModal }) => {
  return (
    <Modal
      className="project__modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      contentLabel="Project Modal"
      //   style={{
      //     overlay: {
      //       position: "fixed",
      //       top: "0",
      //       left: "0",
      //       right: "0",
      //       bottom: "0",
      //       display: "flex",
      //       alignItems: "center",
      //       justifyContent: "center",
      //       backgroundColor: "rgba(0, 0, 0, 0.5)",
      //       zIndex: "1000",
      //     },
      //     content: {
      //       width: "90%",
      //       maxWidth: "800px",
      //       maxHeight: "80%",
      //       padding: "4rem",
      //       backgroundColor: "#fff",
      //       borderRadius: "8px",
      //       boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      //       overflowY: "auto",
      //       position: "relative",
      //     },
      //   }}
    >
      <div className="project__modal-content">
        <button onClick={closeModal} className="project__modal-btn">
          <IoClose />
        </button>
        <img
          className="project__modal-img"
          src={placeholder}
          alt={`${project.title} Demo`}
        />
        <div className="project__modal-details">
          <div className="project__modal-header">
            <h2 className="project__modal-title">{project.title}</h2>
            {/* <a className="logo-url" href="/">
              <FaExternalLinkAlt />
            </a> */}
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
