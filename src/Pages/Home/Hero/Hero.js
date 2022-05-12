import React from "react";
import chairImage from "../../../Images/image/chair.png";
import bgImage from "../../../Images/image/bg.png";

const Hero = () => {
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img src={chairImage} />
        </div>

        <div>
          <h1 class="text-5xl font-black text-black drop-shadow">
            Your New Smile Starts Here
          </h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 border-0 px-10 font-bold rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
