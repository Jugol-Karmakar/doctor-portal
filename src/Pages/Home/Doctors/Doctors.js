import React from "react";
import useDoctors from "../../../Hooks/useDoctors";
import Doctor from "../../Doctors/Doctor";
import DoctorDetails from "../../Doctors/DoctorDetails";

const Doctors = ({ isHome }) => {
  const [doctors, setDoctors] = useDoctors();

  return (
    <section className="mb-24">
      <div className="container mx-auto px-10">
        <div className="flex flex-col justify-center items-center my-6">
          <h1 className="text-4xl my-2">Our Expert Doctor</h1>
          <h5 className="text-lg mb-3 text-gray-700 mx-6 ">
            Condimentum rutrum placerat egestas condimentum mi eros. Eleifend
            cras quirntum Feugiat elit placerat. Diam tempor malesuada.!!
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 py-10">
          {isHome &&
            doctors
              .slice(0, 3)
              .map((doctor) => (
                <DoctorDetails key={doctor._id} doctor={doctor}></DoctorDetails>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
