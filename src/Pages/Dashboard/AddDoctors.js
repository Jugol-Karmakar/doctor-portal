import React from "react";

const AddDoctors = () => {
  const handelAddDoctor = (e) => {
    e.preventDefault();

    const image = e.target.image.value;
    const name = e.target.name.value;
    const degree = e.target.degree.value;
    const specialist = e.target.specialist.value;
    const details = e.target.details.value;

    const doctor = {
      image,
      name,
      degree,
      specialist,
      details,
    };

    fetch("http://localhost:5000/doctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctor),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2 className="text-4xl font-bold m-6 border-b-2 border-blue-600 pb-4">
        Add Doctors
      </h2>

      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold text-gray-700 mb-5 py-4">
          Appoint New Doctor
        </h3>
        <form className="grid grid-cols-1" onSubmit={handelAddDoctor}>
          <input
            type="text"
            name="name"
            placeholder="Doctor Name"
            className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-2xl rounded-full mb-4 px-6 py-3"
          />
          <input
            type="text"
            name="image"
            placeholder="Doctor Image Link"
            className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-2xl rounded-full mb-4 px-6 py-3"
          />
          <div className="flex justify-between">
            <input
              type="text"
              name="degree"
              placeholder="Doctor Degree"
              className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-sm mr-4   rounded-full mb-4 px-6 py-3"
            />
            <input
              type="text"
              name="specialist"
              placeholder="Doctor Specialist"
              className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-sm ml-4  rounded-full mb-4 px-6 py-3"
            />
          </div>
          <textarea
            className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-2xl rounded-full mb-4 px-6 py-3"
            type="text"
            name="details"
            placeholder="Doctors Details"
            cols="30"
            rows="2"
          ></textarea>
          <input
            className="w-full max-w-2xl rounded-full mb-4 text-lg  font-bold py-3 cursor-pointer bg-blue-600 border-0 px-10 text-white"
            type="submit"
            value="ADD DOCTOR"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
