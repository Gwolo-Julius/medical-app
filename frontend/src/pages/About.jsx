import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="font-medium text-gray-700">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col gap-12 md:flex-row">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-4 md:w-2/4 text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it come to
            scheduling doctors appointment and managing their health records.
          </p>
          <p>
            Prescipto is committed to excellence in healthcare technology. We
            continously strive to enhance our platform, integrating the latest
            advancement to improve user experience and deliver superior
            services. Whether you're booking your first appointment or managing
            ongoing care, Prescipto is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create seamless healthcare experience
            to every user. We aim to bridge the gap between patients and
            healthcare providers, making it easier for you to access you need
            when you need it.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span></p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="flex flex-col gap-5 border px-8 py-6 text-[15px] cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 ">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="flex flex-col gap-5 border  px-8 py-6 text-[15px] cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 ">
          <b>Convenience:</b>
          <p>Access to network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="flex flex-col gap-5 border  px-8 py-6 text-[15px] cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 ">
          <b>Personalisation:</b>
          <p>Tailored recommendations and remainders to help you stay on top of your health. </p>
        </div>
      </div>
    </div>
  );
};

export default About;
