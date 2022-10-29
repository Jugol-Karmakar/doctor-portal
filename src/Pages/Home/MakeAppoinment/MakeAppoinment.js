import React from "react";
import doctor from "../../../Images/image/doctor.png";
import appointment from "../../../Images/image/appointment.png";
import Button from "../../Shared/Button/Button";
import { Link } from "react-router-dom";

const MakeAppoinment = () => {
  return (
    <section className="w-full" style={{ background: `url(${appointment})` }}>
      <div className="container mx-auto px-20 flex lg:flex-row flex-col  items-center">
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end lg:block hidden">
          <img
            className="w-full h-full max-h-[450px] object-contain mt-[-100px]"
            src={doctor}
            alt=""
          />
        </div>
        <div className="lg:w-1/2 w-full lg:py-0 py-6">
          <h4 className="text-xl font-bold text-cyan-400">Appointment</h4>
          <h2 className="text-2xl font-bold text-white py-3">
            Make an appointment Today
          </h2>
          <p className="text-white py-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className="my-3">
            <Link to="/appointment">
              <Button>APPOINMENT</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
