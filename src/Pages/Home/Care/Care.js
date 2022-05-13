import React from "react";
import treatment from "../../../Images/image/treatment.png";
import Button from "../../Shared/Button/Button";

const Care = () => {
  return (
    <div class="container mx-auto lg:px-20 px-10 min-h-screen bg-base-100 my-20">
      <div class="flex flex-col lg:flex-row items-center">
        <div className="flex justify-center lg:justify-start lg:w-1/2 overflow-hidden">
          <img
            className="h-full w-full max-w-[500px] max-h-[450px] object-cover rounded-lg"
            src={treatment}
          />
        </div>

        <div className="text-center lg:text-left lg:mt-0 mt-10 w-full lg:w-1/2">
          <h1 class="text-4xl font-bold pr-5 text-[#3A4256]">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Care;
