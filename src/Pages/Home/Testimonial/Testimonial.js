import React from "react";
import quote from "../../../Images/icons/quote.svg";
import people1 from "../../../Images/image/people1.png";
import people2 from "../../../Images/image/people2.png";
import people3 from "../../../Images/image/people3.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

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
      _id: 3,
      name: "Rokia Banu",
      image: people3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "Fulbarigate,kuet. Khulna",
    },
    {
      _id: 4,
      name: "Rokia Banu",
      image: people3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "Fulbarigate,kuet. Khulna",
    },
    {
      _id: 5,
      name: "Rokia Banu",
      image: people3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "Fulbarigate,kuet. Khulna",
    },
    {
      _id: 6,
      name: "Rokia Banu",
      image: people3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      address: "Fulbarigate,kuet. Khulna",
    },
  ];
  return (
    <section className="py-24 bg-[#e2f6fd]">
      <div className="container mx-auto flex justify-between px-10">
        <div className="">
          <h4 className="text-cyan-400 text-2xl font-bold">Testimonial</h4>
          <h2 className="text-3xl font-bold py-1">What's Your Patients Says</h2>
        </div>
        <div className="w-40">
          <img className="w-full h-full" src={quote} alt="" />
        </div>
      </div>

      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-1/2 mx-auto bg-white px-10 shadow-md rounded-xl"
        >
          {patients.map((patient) => (
            <SwiperSlide
              key={patient._id}
              className="flex flex-col items-center bg-blue-400 p-8 my-6  rounded-xl shadow-lg"
            >
              <div className="text-center">
                <p className="text-white text-lg font-medium">
                  {patient.description}
                </p>
              </div>
              <div className="w-24 h-24 overflow-hidden my-2">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={patient.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-lg font-medium">{patient.name}</h2>
                <p>{patient.address}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
