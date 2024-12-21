import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary  rounded-lg px-6 md:px-10">
      {/* @@@@@@@ LEFT SIDE @@@@@@@@@ */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <h1 className="text-3xl text-center md:text-start w-full md:text-4xl lg:text-5xl text-white font-semibold leading-tight lg:leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-3 text-sm text-white font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p className="text-xs text-center sm:text-start">
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          className="flex items-center gap-2 py-3 px-8 bg-white rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 font-light cursor-pointer"
          href="#speciality"
        >
          Book appointment <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* @@@@@@@ RIGHT SIDE @@@@@@@@@ */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;