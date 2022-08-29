import React from "react";
import doctor1 from "../../Images/image/doctor1.jpg";
import doctor2 from "../../Images/image/doctor2.jpg";
import fluoride from "../../Images/image/fluoride.png";
import whitening from "../../Images/image/whitening.png";

const Choose = () => {
  const chooses = [
    {
      id: "01",
      name: "Advanced Cad Cam Laboratory",
      image: doctor1,
    },
    {
      id: "02",
      name: "Caring & Higly Qulified Doctors",
      image: doctor2,
    },
    {
      id: "03",
      name: "Use Best Equipments in Our Clinic",
      image: fluoride,
    },
    {
      id: "04",
      name: "Online Appointment Facility",
      image: whitening,
    },
  ];
  return (
    <section className="my-20">
      <div className="text-center my-4">
        <h4 className="text-2xl font-bold text-blue-600">Why Choose Us</h4>
        <h1 className="text-4xl font-bold text-black">
          Advantages & Technologies
        </h1>
        <p className="my-2 py-2 text-gray-500">
          Your teeth play an important part in your daily life. It not only
          helps you to chew and eat your food, but <br /> frames your face. Any
          missing tooth can have a major impact on your quality of life.
        </p>
      </div>
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center my-10">
        {chooses.map((choose) => (
          <div key={choose.id} className="p-6 shadow-xl">
            <p className="text-lg text-blue-600 font-bold py-2">{choose.id}</p>
            <div className="w-24 h-24 mx-auto">
              <img className="w-full object-cover" src={choose.image} alt="" />
            </div>
            <h2 className="text-xl font-bold text-black text-center py-3">
              {choose.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
