import React from "react";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
