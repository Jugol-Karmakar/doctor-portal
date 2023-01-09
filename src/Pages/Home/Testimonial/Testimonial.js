import React from "react";
import quote from "../../../Images/icons/quote.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import { useState } from "react";
import { useEffect } from "react";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto flex justify-between px-10">
        <div className="">
          <h2 className="text-4xl font-bold text-center py-1">
            What's Our Patients Says
          </h2>
        </div>
        <div className="w-40">
          <img className="w-full h-full" src={quote} alt="" />
        </div>
      </div>

      <div className="mx-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review._id}
              className="flex flex-col items-center bg-blue-50 mt-4 mb-8 py-6 px-8"
            >
              <div className="text-center pb-2 text-gray-800 font-medium">
                <p className="">{review.review}</p>
              </div>
              <div className="w-24 h-24 overflow-hidden my-4">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={review.image}
                  alt=""
                />
              </div>
              <div className="text-center my-2">
                <h2 className="text-xl font-bold text-gray-700">
                  {review.name}
                </h2>
                <p className="text-blue-600 font-bold">{review.profession}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
