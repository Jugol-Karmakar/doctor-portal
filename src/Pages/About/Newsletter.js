import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="bg-blue-600 py-10">
      <div className="py-10 flex flex-col items-center">
        <h1 className="text-4xl text-center font-bold text-white mb-7">
          SignUp for our Newsletter
        </h1>
        <div className="w-1/2 flex justify-end items-center relative">
          <input
            className="w-full py-4 px-6 outline-none rounded-full "
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <FaTelegramPlane className="text-6xl text-blue-600 pr-8 cursor-pointer absolute" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
