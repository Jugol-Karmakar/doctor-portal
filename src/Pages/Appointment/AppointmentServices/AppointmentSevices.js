import React from "react";

const AppointmentSevices = ({ service, setTreatment }) => {
  const { name, slots, price } = service;

  return (
    <div className="shadow-lg p-8 rounded-lg">
      <h2 className="text-center text-2xl font-bold text-blue-600">{name}</h2>
      <div className="text-center my-2">
        <p className="font-semibold text-gray-500">
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-blue-600">Try Next Day</span>
          )}
        </p>
        <p className="text-lg text-gray-600 font-bold">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Avaliable
        </p>
        <p className="my-2 text-blue-600 font-bold text-xl">Price : ${price}</p>
      </div>
      <div className="flex justify-center">
        <label
          onClick={() => setTreatment(service)}
          disabled={slots.length === 0}
          htmlFor="booking-modal"
          className="btn border-0 hover:bg-blue-500 px-6 text-white font-bold py-2 bg-blue-600 rounded-lg"
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default AppointmentSevices;
