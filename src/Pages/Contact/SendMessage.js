import React from "react";

const SendMessage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 my-10 py-10">
        <div className="shadow-xl rounded-xl py-10">
          <h2 className="text-center font-bold text-3xl my-4">Send Message</h2>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all lg:w-full max-w-sm lg:max-w-md mx-14 rounded-full mb-4 px-6 py-3 "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all lg:w-full max-w-sm lg:max-w-md mx-14 rounded-full mb-4 px-6 py-3"
            />
            <input
              type="text"
              placeholder="Website"
              className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all lg:w-full max-w-sm lg:max-w-md mx-14 rounded-full mb-4 px-6 py-3"
            />
            <textarea
              className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all lg:w-full max-w-xs lg:max-w-md rounded-full mx-8 lg:mx-14 mb-4 px-6 py-3"
              placeholder="Write Message"
              cols="30"
              rows="2"
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="max-w-sm lg:w-full lg:max-w-md mx-14 rounded-full mb-4 text-lg  font-bold py-3 cursor-pointer bg-blue-600 border-0 px-10 text-white"
            />
          </form>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="shadow-xl p-8 rounded-xl">
              <h2 className="text-xl font-bold text-center">Office Address</h2>
              <div className="py-3 text-center">
                <p className="text-base text-gray-600">
                  4920 Northwest 2 Avenue Medford, MN 55049 kigkong,USA
                </p>
              </div>
            </div>
            <div className="shadow-xl p-8 rounded-xl">
              <h2 className="text-xl font-bold text-center">Phone Number</h2>
              <div className="py-3 text-center">
                <p className="text-base text-gray-600">+888-555-333</p>
                <p className="text-base text-gray-600">878454545</p>
                <p className="text-base text-gray-600">02-3254789645</p>
              </div>
            </div>
            <div className="shadow-xl p-8 rounded-xl">
              <h2 className="text-xl font-bold text-center">Email Address</h2>
              <div className="py-3 text-center">
                <p className="text-base text-gray-600">www.rent@gmailmil.com</p>
                <p className="text-base text-gray-600">www.rentensupport.com</p>
                <p className="text-base text-gray-600">facebook/renten.net</p>
              </div>
            </div>
            <div className="shadow-xl p-8 rounded-xl">
              <h2 className="text-xl font-bold text-center">Fax Number</h2>
              <div className="py-3 text-center">
                <p className="text-base text-gray-600">
                  4920 Northwest 2 Avenue Medford, MN 55049 kigkong,USA
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold ">
              Call Now : <span className="text-blue-600">+000-999-555</span>
            </h2>
            <div className="mt-3 flex flex-row">
              <input
                type="text"
                placeholder="Enter Number"
                className="py-3 pl-2 lg:px-4 max-w-xs bg-slate-100 outline-none rounded-tl-full rounded-bl-full"
              />
              <button className="bg-blue-600 border-0 px-2 lg:px-10 text-white py-3 rounded-tr-full rounded-br-full ">
                Free Phone Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
