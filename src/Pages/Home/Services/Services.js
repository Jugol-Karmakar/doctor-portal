import React from "react";
import Service from "../Service/Service";
import fluoride from "../../../Images/image/fluoride.png";
import cavity from "../../../Images/image/cavity.png";
import teeth from "../../../Images/image/whitening.png";
import oral from "../../../Images/image/oral.png";
import cesmetic from "../../../Images/image/cosmetic.png";
import dental from "../../../Images/image/dental.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      image: fluoride,
      description:
        "Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce",
    },
    {
      _id: 2,
      name: "Cavity Filling",
      image: cavity,
      description:
        "Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce",
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      image: teeth,
      description:
        "Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce",
    },
    {
      _id: 4,
      name: "Oral Surgery",
      image: oral,
      description:
        "Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce",
    },
    {
      _id: 5,
      name: "Cosmetic Dentistry",
      image: cesmetic,
      description:
        "Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce",
    },
    {
      _id: 6,
      name: "Pediatric Dental",
      image: dental,
      description:
        "Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">
          Our <span className="border-b-4 border-blue-600 pb-2 mb-4">Ser</span>
          vices
        </h1>
        <p className="mt-10 text-center text-lg text-gray-500">
          Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras
          quirntum <br /> Feugiat elit placerat. Diam tempor malesuada.
        </p>
      </div>
      <div className="container mx-auto px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 pb-5">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </section>
  );
};

export default Services;
