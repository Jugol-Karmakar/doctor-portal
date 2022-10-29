import React from "react";
import bgImage from "../../Images/image/bg.png";
import about from "../../Images/image/about.jpg";
import Button from "../Shared/Button/Button";
import { AiOutlineDoubleRight } from "react-icons/ai";

const AboutHero = () => {
  return (
    <div
      className="hero min-h-screen bg-base-100"
      style={{ background: `url(${bgImage})`, backgroundSize: "contain" }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 rounded-lg shadow-2xl">
          <img src={about} alt="" />
        </div>
        <div className="lg:w-1/2 ml-2">
          <h1 className="text-5xl font-bold">
            Mission and Story About Our Dento
          </h1>
          <p className="py-6 text-gray-600">
            Dento was started in the year 1995 as a small private dental clinic
            in Binghamton, NY, USA. Looking for affordable dental care?
          </p>
          <p className="text-gray-600">
            To take a trivial example, which of us ever undertakes laborious
            physical exercise, except to obtain some advantage from it? But who
            has any right to find fault with a man who chooses to enjoy a
            pleasure that has no annoying consequences, pain resultant pleasure
            praising teachings of the great explorer...
          </p>
          <div className="mt-6">
            <button className="flex items-center bg-blue-600 px-10 py-3 font-bold rounded-full text-white drop-shadow-lg hover:bg-blue-500 transition-all duration-300">
              More About Us
              <AiOutlineDoubleRight className="text-xl ml-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
