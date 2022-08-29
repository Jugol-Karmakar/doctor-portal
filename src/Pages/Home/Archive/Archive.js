import React from "react";
import CountUp from "react-countup";
import dedicate from "../../../Images/image/dedicate.png";
import room from "../../../Images/image/room.png";
import happy from "../../../Images/image/happy.png";
import award from "../../../Images/image/award.png";

const Archive = () => {
  return (
    <section className="my-20">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mb-8">
        <div className="bg-slate-200 p-8 w-full border hover:border hover:border-cyan-500 duration-300">
          <div className="flex justify-center">
            <img src={dedicate} alt="" />
          </div>
          <h2 className="text-center text-4xl font-medium">
            <CountUp end={150} suffix="+" />
          </h2>
          <h3 className="text-center text-xl text-gray-700 my-2">
            Dedicated Doctors
          </h3>
        </div>
        <div className="bg-slate-200 p-8 w-full border hover:border hover:border-cyan-500 duration-300">
          <div className="flex justify-center">
            <img src={room} alt="" />
          </div>
          <h2 className="text-center text-4xl font-medium">
            <CountUp end={200} suffix="+" />
          </h2>
          <h3 className="text-center text-xl text-gray-700 my-2">
            Clinic Room
          </h3>
        </div>
        <div className="bg-slate-200 p-8 w-full border hover:border hover:border-cyan-500 duration-300">
          <div className="flex justify-center">
            <img src={happy} alt="" />
          </div>
          <h2 className="text-center text-4xl font-medium">
            <CountUp end={340} suffix="+" />
          </h2>
          <h3 className="text-center text-xl text-gray-700 my-2">
            Happy Client
          </h3>
        </div>
        <div className="bg-slate-200 p-8 w-full border hover:border hover:border-cyan-500 duration-300">
          <div className="flex justify-center">
            <img src={award} alt="" />
          </div>
          <h2 className="text-center text-4xl font-medium">
            <CountUp end={1200} suffix="+" />
          </h2>
          <h3 className="text-center text-xl text-gray-700 my-2">Award</h3>
        </div>
      </div>
    </section>
  );
};

export default Archive;
