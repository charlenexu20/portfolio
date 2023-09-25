import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();

  const notify = () => {
    toast.success("Thanks for reaching out! I'll get back to you soon.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l185l78",
        "template_8jp99lp",
        form.current,
        process.env.REACT_APP_API_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  return (
    <Fade triggerOnce duration={1500} fraction={0.3}>
      <section id="contact" className="contact">
        <h2 className="contact__title">Get In Touch</h2>
        <div className="container contact__container">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              SEND MESSAGE
            </button>
          </form>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </section>
    </Fade>
  );
};

export default Contact;
