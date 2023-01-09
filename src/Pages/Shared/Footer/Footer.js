import React from "react";
import {
  FaHome,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import footerimg from "../../../Images/image/footer.png";
import logo from "../../../Images/image/logo.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div
      className="bg-base-300"
      style={{
        background: `url(${footerimg})`,
        backgroundSize: "cover",
      }}
    >
      <footer className="footer p-20  flex flex-col lg:flex-row lg:justify-between container mx-auto">
        <div>
          <div className="flex items-center -mt-3">
            <img className="w-20 mr-2" src={logo} alt="" />
            <span className="text-2xl font-bold text-[#3A4256]">
              Doctor Portal
            </span>
          </div>
          <p className="max-w-xs mt-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.Here,
            content here', making it look like readable English.{" "}
          </p>
          <div className="flex items-center mt-4">
            <div className="bg-blue-600 mr-2 p-3 cursor-pointer drop-shadow rounded-full hover:scale-125 transition-all duration-300">
              <FaFacebook className="text-xl text-white" />
            </div>
            <div className="bg-sky-500 mr-2 p-3 cursor-pointer drop-shadow rounded-full hover:scale-125 transition-all duration-300">
              <FaLinkedinIn className="text-xl text-white" />
            </div>
            <div className="bg-red-500 mr-2 p-3 cursor-pointer drop-shadow rounded-full hover:scale-125 transition-all duration-300">
              <FaGooglePlusG className="text-xl text-white" />
            </div>
            <div className="bg-cyan-400 mr-2 p-3 cursor-pointer drop-shadow rounded-full hover:scale-125 transition-all duration-300">
              <FaTwitter className="text-xl text-white" />
            </div>
            <div className="bg-red-600 mr-2 p-3 cursor-pointer drop-shadow rounded-full hover:scale-125 transition-all duration-300">
              <FaYoutube className="text-xl text-white" />
            </div>
          </div>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#3A4256]">Services</span>
          <a href="/" className="link link-hover">
            Emergency Checkup
          </a>
          <a href="/" className="link link-hover">
            Monthly Checkup
          </a>
          <a href="/" className="link link-hover">
            Weekly Checkup
          </a>
          <a href="/" className="link link-hover">
            Deep Checkup
          </a>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#3A4256]">Oral Health</span>
          <a href="/" className="link link-hover">
            Fluoride Treatment
          </a>
          <a href="/" className="link link-hover">
            Cavity Filling
          </a>
          <a href="/" className="link link-hover">
            Teath Whitening
          </a>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#3A4256]">Our Address</span>
          <div className="grid grid-flow-col gap-4">
            <div className="flex flex-col">
              <a href="/" className="flex items-center mb-3">
                <FaHome className="text-lg mr-2 text-blue-600" /> 58 A, East
                Madison Street, Baltimore
              </a>
              <a href="/" className="flex items-center mb-3">
                {" "}
                <BsFillTelephoneFill className="text-lg mr-2 text-blue-600" />
                +91 12345678
              </a>
              <a href="/" className="flex items-center mb-3">
                <MdEmail className="text-lg mr-2 text-blue-600" />
                support@somemail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center p-6">
        <div>
          <p className="text-sm text-gray-800">
            Copyright © {year} - All right reserved.{" "}
            <strong className="text-blue-600">Doctor Portal</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
