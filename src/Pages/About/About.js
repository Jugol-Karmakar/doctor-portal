import React from "react";
import AboutHero from "./AboutHero";
import Choose from "./Choose";
import Expriance from "./Expriance";
import Mission from "./Mission";
import Newsletter from "./Newsletter";
import NewsTips from "./NewsTips";
import Prices from "./Prices";

const About = () => {
  return (
    <div>
      <AboutHero></AboutHero>
      <Prices></Prices>
      <Expriance></Expriance>
      <Mission></Mission>
      <Choose></Choose>
      <Newsletter></Newsletter>
      <NewsTips></NewsTips>
    </div>
  );
};

export default About;
