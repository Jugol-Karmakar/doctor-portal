import React from "react";

const NewsTip = (props) => {
  const { name, image, detail, post, position } = props.blog;
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div className="overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
          src={image}
          alt=""
        />
      </div>
      <div className="flex justify-center -mt-6 ">
        <div className="w-40 text-center bg-blue-600 px-6 py-2 rounded-full text-white font-medium z-40">
          28 March 2020
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="flex justify-between py-3">
          <p className="text-lg text-gray-600">{post}</p>
          <p className="text-lg text-gray-600">{position}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold hover:text-blue-600 transition duration-500 cursor-pointer">
            {name}
          </h2>
          <p className="mt-5 text-lg text-gray-500">{detail}</p>
        </div>
        <div className="flex justify-center mt-4">
          <button className="border border-blue-600 px-6 py-2 rounded-full text-blue-600 text-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsTip;
