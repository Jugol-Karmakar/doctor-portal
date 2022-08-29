import React from "react";
import headingBanner from "../../Images/image/heading-banner.jpg";

const ContactHeading = () => {
  return (
    <div
      className="py-10 bg-gray-800/60"
      style={{
        background: `url(${headingBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <h1 className="text-5xl text-white font-bold text-center my-8">
        Contact With Us
      </h1>
    </div>
  );
};

export default ContactHeading;
