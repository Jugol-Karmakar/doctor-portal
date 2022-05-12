import React from "react";
import { FaHome, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImGooglePlus, ImLinkedin2 } from "react-icons/im";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <div class="footer p-10 text-base-content bg-black">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Doctor Portal</h1>
          <div class="flex flex-col gap-4">
            <div className="flex items-center">
              <a>
                <FaHome className="mr-3 text-lg text-white"></FaHome>
              </a>
              <p className="text-lg text-white">
                No: 58 A, East Madison Street, Baltimore, MD, USA 4508
              </p>
            </div>

            <div className="flex items-center">
              <a>
                <BsFillTelephoneFill className="mr-3 text-lg text-white"></BsFillTelephoneFill>
              </a>
              <p className="text-lg text-white">+91 12345678</p>
            </div>
            <div className="flex items-center">
              <a>
                <MdEmail className="mr-3 text-lg text-white"></MdEmail>
              </a>
              <p className="text-lg text-white">support@somemail.com</p>
            </div>
          </div>

          <div className="flex items-center flex-row mt-4">
            <a>
              <FaTwitter className="text-2xl text-white mx-2"></FaTwitter>
            </a>
            <a>
              <BsFacebook className="text-2xl text-white mx-2"></BsFacebook>
            </a>
            <a>
              <ImGooglePlus className="text-2xl text-white mx-2"></ImGooglePlus>
            </a>

            <a>
              <ImLinkedin2 className="text-2xl text-white mx-2"></ImLinkedin2>
            </a>
            <a>
              <FaYoutube className="text-2xl text-white mx-2"></FaYoutube>
            </a>
          </div>
        </div>
        <div>
          <span class="text-xl font-bold text-white">Services</span>
          <a class="link link-hover text-white text-lg">Branding</a>
          <a class="link link-hover text-white text-lg">Design</a>
          <a class="link link-hover text-white text-lg">Marketing</a>
          <a class="link link-hover text-white text-lg">Advertisement</a>
        </div>
        <div>
          <span class="text-xl font-bold text-white">Company</span>
          <a class="link link-hover text-white text-lg">About us</a>
          <a class="link link-hover text-white text-lg">Contact</a>
          <a class="link link-hover text-white text-lg">Jobs</a>
          <a class="link link-hover text-white text-lg">Press kit</a>
        </div>
      </div>

      <div class="footer footer-center p-10 text-base-content bg-black">
        <div>
          <p className="text-white text-lg">
            Copyright ©. {year} All right reserved.{" "}
            <strong>Doctor Portal</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
