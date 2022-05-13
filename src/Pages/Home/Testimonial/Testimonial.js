import React from "react";
import quote from "../../../Images/icons/quote.svg";
import people1 from "../../../Images/image/people1.png";
import people2 from "../../../Images/image/people2.png";
import people3 from "../../../Images/image/people3.png";
import TestimonialItem from "../TestimonialItem/TestimonialItem";

const Testimonial = () => {
  const patients = [
    {
      _id: 1,
      name: "Winson Herry",
      image: people1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "Gulsan Tongmor .Dhaka",
    },
    {
      _id: 2,
      name: "Ema Jannat",
      image: people2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "Uttra 34/3. Dhaka",
    },
    {
      _id: 1,
      name: "Rokia Banu",
      image: people3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "Fulbarigate,kuet. Khulna",
    },
  ];
  return (
    <section className="my-24">
      <div className="container mx-auto flex justify-between px-10">
        <div className="">
          <h4 className="text-cyan-400 text-2xl font-bold">Testimonial</h4>
          <h2 className="text-3xl font-bold py-1">What's Your Patients Says</h2>
        </div>
        <div className="w-40">
          <img className="w-full h-full" src={quote} alt="" />
        </div>
      </div>
      <div className="container mx-auto px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {patients.map((patient) => (
          <TestimonialItem
            patient={patient}
            key={patient._id}
          ></TestimonialItem>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
