import React from "react";

const TestimonialItem = (props) => {
  const { name, image, description, address } = props.patient;
  return (
    <div className="shadow-2xl rounded-lg overflow-hidden p-5">
      <div className="text-center">
        <p className="px-4 text-stone-600 font-semibold">{description}</p>
      </div>
      <div>
        <div className="flex justify-center my-4">
          <img
            className="border-2 border-cyan-400 rounded-full "
            src={image}
            alt=""
          />
        </div>
        <h3 className="text-center font-bold text-xl">{name}</h3>
        <p className="text-center font-bold text-sm">{address}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
