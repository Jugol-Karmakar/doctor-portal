import React from "react";

const Service = (props) => {
  const { name, image, description } = props.service;
  return (
    <div className="bg-white shadow-2xl rounded-xl overflow-hidden py-8 px-5 hover:-translate-y-2 transition-all duration-500">
      <div className="w-28 h-28 mx-auto mb-3">
        <img className="w-full " src={image} alt="" />
      </div>
      <div className="text-center px-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-base text-neutral-500 my-2">{description}</p>
      </div>
    </div>
  );
};

export default Service;
