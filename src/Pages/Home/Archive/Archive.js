import React from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import dedicate from "../../../Images/image/dedicate.png";
import room from "../../../Images/image/room.png";
import happy from "../../../Images/image/happy.png";
import award from "../../../Images/image/award.png";
import { useState } from "react";

const Archive = () => {
  const [counterOn, setCounterOn] = useState(false);
  const services = [
    {
      id: 1,
      value: "400k",
      name: "patient care",
    },
    {
      id: 2,
      value: "505k",
      name: "patient care",
    },
    {
      id: 3,
      value: "240k",
      name: "patient care",
    },
    {
      id: 4,
      value: "140k",
      name: "patient care",
    },
  ];
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className="py-20">
        <div className="container mx-auto p-10 flex justify-around mb-8">
          <div className="">
            <div className="bg-blue-600 w-36 h-36 mx-auto flex flex-col justify-center items-center rounded-2xl">
              <h1 className="text-white text-4xl font-extrabold">
                {counterOn && (
                  <CountUp start={0} end={410} duration={2} delay={0}></CountUp>
                )}
                +
              </h1>
            </div>
            <h2 className="text-center text-3xl font-bold mt-2">Total Staff</h2>
          </div>
          <div className="">
            <div className="bg-blue-600 w-36 h-36 mx-auto flex flex-col justify-center items-center rounded-2xl">
              <h1 className="text-white text-4xl font-extrabold">
                {counterOn && (
                  <CountUp start={0} end={15} duration={2} delay={0}></CountUp>
                )}
                K
              </h1>
            </div>
            <h2 className="text-center text-3xl font-bold mt-2">
              Patients Bed
            </h2>
          </div>
          <div className="">
            <div className="bg-blue-600 w-36 h-36 mx-auto flex flex-col justify-center items-center rounded-2xl">
              <h1 className="text-white text-4xl font-extrabold">
                {counterOn && (
                  <CountUp start={0} end={520} duration={2} delay={0}></CountUp>
                )}
                +
              </h1>
            </div>
            <h2 className="text-center text-3xl font-bold mt-2">
              Consult Room
            </h2>
          </div>
          <div className="">
            <div className="bg-blue-600 w-36 h-36 mx-auto flex flex-col justify-center items-center rounded-2xl">
              <h1 className="text-white text-4xl font-extrabold">
                {counterOn && (
                  <CountUp start={0} end={50} duration={2} delay={0}></CountUp>
                )}
                +
              </h1>
            </div>
            <h2 className="text-3xl font-bold mt-2">ICU Support</h2>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Archive;
