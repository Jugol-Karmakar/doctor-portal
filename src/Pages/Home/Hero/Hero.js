import React from "react";
import chairImage from "../../../Images/image/chair.png";
import bgImage from "../../../Images/image/bg.png";
import Button from "../../Shared/Button/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-base-100"
      style={{ background: `url(${bgImage})`, backgroundSize: "contain" }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img src={chairImage} alt="" />
        </div>

        <div>
          <h1 className="text-5xl font-black text-black drop-shadow">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/appointment">
            <Button>APPOINMENT</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
