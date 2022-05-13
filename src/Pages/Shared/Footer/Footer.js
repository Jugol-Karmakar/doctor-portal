import React from "react";
import { FaHome, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImGooglePlus, ImLinkedin2 } from "react-icons/im";
import footerimg from "../../../Images/image/footer.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div
      class="bg-base-300"
      style={{
        background: `url(${footerimg})`,
        backgroundSize: "cover",
      }}
    >
      <footer class="footer p-20  flex flex-col lg:flex-row lg:justify-between container mx-auto">
        <div>
          <span class="text-2xl font-bold text-[#3A4256]">Services</span>
          <a class="link link-hover">Emergency Checkup</a>
          <a class="link link-hover">Monthly Checkup</a>
          <a class="link link-hover">Weekly Checkup</a>
          <a class="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span class="text-2xl font-bold text-[#3A4256]">ORAL HEALTH</span>
          <a class="link link-hover">Fluoride Treatment</a>
          <a class="link link-hover">Cavity Filling</a>
          <a class="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span class="text-2xl font-bold text-[#3A4256]">OUR ADDRESS</span>
          <div class="grid grid-flow-col gap-4">
            <div className="flex flex-col">
              <a className="flex items-center mb-3">
                <FaHome className="text-lg mr-2 text-cyan-600" /> 58 A, East
                Madison Street, Baltimore
              </a>
              <a className="flex items-center mb-3">
                {" "}
                <BsFillTelephoneFill className="text-lg mr-2 text-cyan-600" />
                +91 12345678
              </a>
              <a className="flex items-center mb-3">
                <MdEmail className="text-lg mr-2 text-cyan-600" />
                support@somemail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div class="text-center p-6">
        <div>
          <p className="text-sm">
            Copyright © {year} - All right reserved.{" "}
            <strong className="text-cyan-500">Doctor Portal</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
