import React from "react";
import chairImage from "../../../Images/image/chair.png";
import bgImage from "../../../Images/image/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentHero = ({ date, setDate }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{ background: `url(${bgImage})`, backgroundSize: "contain" }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full ">
          <img src={chairImage} alt="" />
        </div>
        <div className="w-full  flex justify-center">
          <DayPicker
            className="bg-white p-6 rounded-lg"
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentHero;
