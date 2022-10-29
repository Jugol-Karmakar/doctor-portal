import React from "react";
import { FaLinkedinIn, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DoctorDetails = (props) => {
  const { _id, name, image, specialist, degree, details } = props.doctor;
  const navigate = useNavigate();

  const doctorProfile = (id) => {
    navigate(`/doctors/${id}`);
  };
  return (
    <div className="shadow-lg my-8 rounded-xl border hover:-translate-y-2 transition-all duration-500">
      <div className="flex justify-center items-center -mt-16 ">
        <div className="w-32 h-32 rounded-full border-2 border-blue-600 overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
      </div>
      <div className="p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold ">
          <button onClick={() => doctorProfile(_id)}>{name}</button>
        </h2>
        <p className="text-lg text-gray-500">{specialist}</p>
        <p className="text-sm text-gray-700 font-medium">{degree}</p>
        <p className="text-lg text-center py-3">{details}</p>
        <div className="flex">
          <div className="bg-blue-600 mx-2 p-2 rounded-full cursor-pointer">
            <FaLinkedinIn className="text-xl text-white" />
          </div>
          <div className="bg-cyan-500 mx-2 p-2 rounded-full cursor-pointer">
            <FaTwitter className="text-xl text-white " />
          </div>
          <div className="bg-red-600 mx-2 p-2 rounded-full cursor-pointer">
            <FaGooglePlusG className="text-xl text-white " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
