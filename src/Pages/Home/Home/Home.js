import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Care from "../Care/Care";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Info from "../Info/Info";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <Care></Care>
      <MakeAppoinment></MakeAppoinment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
