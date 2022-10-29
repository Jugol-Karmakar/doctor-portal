import React from "react";
import clock from "../../../Images/icons/clock.svg";
import marker from "../../../Images/icons/marker.svg";
import phone from "../../../Images/icons/phone.svg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiClock, FiPhoneCall } from "react-icons/fi";

const CardInfo = () => {
  return (
    <section className="bg-blue-600">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 mb-20">
        <div className="flex items-center py-8 px-5 mx-4 hover:bg-blue-500 transition duration-300">
          <div className="mr-3">
            <FiClock className="text-5xl text-white" />
          </div>
          <div className="">
            <h4 className="text-white font-bold px-2 text-lg">
              Opeining Hours
            </h4>
            <p className="text-white px-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex items-center py-8 px-5 mx-4 hover:bg-blue-500 transition duration-300">
          <div className="mr-3">
            <FaMapMarkerAlt className="text-5xl text-white" />
          </div>
          <div>
            <h4 className="text-white font-bold px-2 text-lg">
              Visit Our Location
            </h4>
            <p className="text-white px-2 text-sm">Gulsan 1036, Dhaka</p>
          </div>
        </div>
        <div className="flex items-center py-8 px-5 mx-4 hover:bg-blue-500 transition duration-300">
          <div className="mr-3">
            <FiPhoneCall className="text-5xl text-white" />
          </div>
          <div>
            <h4 className="text-white font-bold px-2 text-lg">
              Contact Us Now
            </h4>
            <p className="text-white px-2 text-sm">+01235324222</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardInfo;
