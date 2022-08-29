import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const Price = (props) => {
  const { name, price, advantage } = props.price;
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-500">
      <div className="bg-blue-600 w-full flex flex-col items-center py-6">
        <h2 className="text-3xl font-semibold text-white mb-2">{name}</h2>
        <h4 className="text-white flex items-center">
          <sup className="text-lg font-medium mx-1">$</sup>
          <span className="text-4xl font-bold">{price}</span>
          <sub className="text-lg ml-1 font-medium">/month</sub>
        </h4>
      </div>
      <div className="py-4 my-4">
        {advantage.map((advan) => (
          <div key={advan} className="flex items-center py-2">
            <BsCheckCircle className="mr-2 text-blue-600" />
            <p className="text-lg text-gray-500">{advan}</p>
          </div>
        ))}
      </div>
      <div className="pb-10">
        <button className="border border-blue-600 rounded-full px-6 py-2 text-lg text-blue-600 font-bold cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Price;
