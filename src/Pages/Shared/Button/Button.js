import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button class="btn bg-gradient-to-r from-cyan-500 to-blue-500  border-0 px-10 font-bold rounded-full">
        {children}
      </button>
    </div>
  );
};

export default Button;
