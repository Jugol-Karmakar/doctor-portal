import React from "react";
import Archive from "../Archive/Archive";
import Care from "../Care/Care";
import Doctors from "../Doctors/Doctors";
import Hero from "../Hero/Hero";
import Info from "../Info/Info";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import NewsLetter from "../NewsLetter/NewsLetter";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <Care></Care>
      <Doctors isHome></Doctors>
      <MakeAppoinment></MakeAppoinment>
      <Testimonial></Testimonial>
      <Archive></Archive>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
