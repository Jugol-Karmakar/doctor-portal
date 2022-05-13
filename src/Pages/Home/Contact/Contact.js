import React from "react";
import appoinment from "../../../Images/image/appointment.png";
import Button from "../../Shared/Button/Button";

const Contact = () => {
  return (
    <section className="w-full " style={{ background: `url(${appoinment})` }}>
      <div className="container mx-auto py-12  px-20 max-w-[600px]">
        <div>
          <h4 className="text-cyan-400 text-xl font-bold text-center">
            Contact Us
          </h4>
          <h2 className="text-center text-2xl font-bold my-3 text-white">
            Stay Connected With Us
          </h2>
        </div>
        <div>
          <form className="flex flex-col">
            <input
              className="my-2 py-2 rounded-md px-3 outline-none"
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <input
              className="my-2 py-2 rounded-md px-3 outline-none"
              type="text"
              name="subject"
              placeholder="Your Subject"
            />
            <textarea
              className="my-2 py-2 rounded-md px-3 outline-none"
              name="message"
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <div className="flex justify-center my-2">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
