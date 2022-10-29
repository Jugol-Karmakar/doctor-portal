import React from "react";
import useDoctors from "../../Hooks/useDoctors";
import DoctorDetails from "./DoctorDetails";

const Doctor = () => {
  const [doctors, setDoctors] = useDoctors();
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-8 mb-5">
        Ours <span className="border-b-4 border-blue-600 pb-2 mb-4">Doc</span>
        tors
      </h1>
      <div className="container mx-auto px-10 grid grid-cols-3 gap-6 my-10">
        {doctors.map((doctor) => (
          <DoctorDetails key={doctor._id} doctor={doctor}></DoctorDetails>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
