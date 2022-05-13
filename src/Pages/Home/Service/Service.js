import React from "react";

const Service = (props) => {
  const { name, image, description } = props.service;
  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden p-5">
      <div className="w-full flex justify-center mb-3">
        <img className="" src={image} alt="" />
      </div>
      <div className="text-center px-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-base text-neutral-500 my-2">{description}</p>
      </div>
    </div>
  );
};

export default Service;
