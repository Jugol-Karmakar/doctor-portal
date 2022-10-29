import React from "react";
import { Link } from "react-router-dom";
import useDoctors from "../../../Hooks/useDoctors";
import DoctorDetails from "../../Doctors/DoctorDetails";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const Doctors = ({ isHome }) => {
  const [doctors, setDoctors] = useDoctors();

  return (
    <section className="pt-20 pb-5">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">
          Our Exp
          <span className="border-b-4 border-blue-600 pb-2 mb-4">er</span>t
          Doctor
        </h1>
        <p className="mt-10 text-center text-lg text-gray-500">
          Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras
          quirntum <br /> Feugiat elit placerat. Diam tempor malesuada.
        </p>
      </div>
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pt-10">
        {isHome &&
          doctors
            .slice(0, 3)
            .map((doctor) => (
              <DoctorDetails key={doctor._id} doctor={doctor}></DoctorDetails>
            ))}
      </div>
      <div className="flex justify-center py-4">
        <Link
          to="/doctors"
          className="bg-blue-600 px-10 py-3 font-bold rounded-full text-white drop-shadow-lg hover:bg-blue-500 transition-all duration-300 flex items-center"
        >
          SEE ALL <HiOutlineChevronDoubleRight className="text-xl ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Doctors;
