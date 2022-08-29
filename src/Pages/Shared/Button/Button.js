import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="bg-blue-600 px-10 py-3 font-bold rounded-full text-white drop-shadow-lg hover:bg-blue-500 transition-all duration-300">
        {children}
      </button>
    </div>
  );
};

export default Button;
