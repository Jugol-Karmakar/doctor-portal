import React from "react";
import useDoctors from "../../Hooks/useDoctors";
import DoctorDetails from "./DoctorDetails";

const Doctor = () => {
  const [doctors, setDoctors] = useDoctors();
  return (
    <div>
      <h1>Hello Doctors</h1>
      <div className="container mx-auto px-10 grid grid-cols-3 gap-6 my-10">
        {doctors.map((doctor) => (
          <DoctorDetails key={doctor._id} doctor={doctor}></DoctorDetails>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
