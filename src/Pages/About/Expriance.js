import React from "react";
import expriance1 from "../../Images/image/experience1.jpg";
import expriance2 from "../../Images/image/experience2.jpg";
import expriance3 from "../../Images/image/experience3.jpg";
import expriance4 from "../../Images/image/experience4.jpg";

const Expriance = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-10 flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 p-6">
          <div>
            <img
              className="w-full h-full object-cover rounded-xl"
              src={expriance1}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover rounded-xl"
              src={expriance2}
              alt=""
            />
          </div>
          <div>
            {" "}
            <img
              className="w-full h-full object-cover rounded-xl"
              src={expriance3}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover rounded-xl"
              src={expriance4}
              alt=""
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-6 lg:px-10 py-6">
          <h2 className="text-5xl font-bold">
            30 Years More Services{" "}
            <span className="border-b-4 border-blue-600 pb-3">Ex</span>
            periences
          </h2>
          <p className="mt-8 pt-6 text-lg">
            Suspendisse nulla praesent, neque volutpat lacinia libero nullam ut,
            in auctor nonummy mi augu massa ult tellus ut integer ultrices
            facilisis semper.
          </p>
          <div className="pt-7">
            <div className="flex items-center justify-between pb-3">
              <h4 className="text-lg text-gray-800 font-bold">Heart Surgery</h4>
              <p>80%</p>
            </div>
            <div className="h-3 w-80 lg:w-full rounded-3xl bg-[#789ce6]">
              <div className="w-64 lg:w-96 bg-blue-600 rounded-3xl h-full"></div>
            </div>
          </div>

          <div className="pt-7">
            <div className="flex items-center justify-between pb-3">
              <h4 className="text-lg text-gray-800 font-bold">
                Laborate Analysis
              </h4>
              <p>80%</p>
            </div>
            <div className="h-3 w-80 lg:w-full rounded-3xl bg-[#789ce6]">
              <div className="w-64 lg:w-96 bg-blue-600 rounded-3xl h-full"></div>
            </div>
          </div>
          <div className="pt-7">
            <div className="flex items-center justify-between pb-3">
              <h4 className="text-lg text-gray-800 font-bold">
                Customer Support
              </h4>
              <p>80%</p>
            </div>
            <div className="h-3 w-80 lg:w-full rounded-3xl bg-[#789ce6]">
              <div className="w-64 lg:w-96 bg-blue-600 rounded-3xl h-full"></div>
            </div>
          </div>
          <div className="pt-7">
            <div className="flex items-center justify-between pb-3">
              <h4 className="text-lg text-gray-800 font-bold">
                Medical Research
              </h4>
              <p>80%</p>
            </div>
            <div className="h-3 w-80 lg:w-full rounded-3xl bg-[#789ce6]">
              <div className="w-64 lg:w-96 bg-blue-600 rounded-3xl h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expriance;
