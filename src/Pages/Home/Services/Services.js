import React from "react";
import Service from "../Service/Service";
import fluoride from "../../../Images/image/fluoride.png";
import cavity from "../../../Images/image/cavity.png";
import teeth from "../../../Images/image/whitening.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      image: fluoride,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 2,
      name: "Cavity Filling",
      image: cavity,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      image: teeth,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];

  return (
    <div className="w-full my-20">
      <div className="text-center my-5">
        <h3 className="text-xl font-bold text-cyan-500">Our Services</h3>
        <h2 className="text-3xl font-bold text-black">Service We Provide</h2>
      </div>
      <div className="container mx-auto px-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
