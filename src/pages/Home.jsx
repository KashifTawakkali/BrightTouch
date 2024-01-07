import { useEffect } from "react";
import AboutCompany from "../components/AboutCompany";
import Banner from "../components/Banner";
import Client from "../components/Client";
import CtaStyle from "../components/CtaStyle";
import Features from "../components/Features";
import FunFact from "../components/FunFact";
import ProjectStyle from "../components/ProjectStyle";
import Service from "../components/Service";
import Skills from "../components/Skills";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Hero from "../components/hero-slider/Hero";
import Working from "../components/Working";

const Home = () => {
  return (
    <>
      {/* <Banner /> */}
      <Hero />
      <Features />
      <AboutCompany />
      <Working />
      <Service />
      <FunFact />
      <Skills />
      <CtaStyle />
      <ProjectStyle />
      <Team />
      <Testimonial />
      <Client />
    </>
  );
};

export default Home;
