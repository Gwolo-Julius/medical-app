import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 gap-10 justify-center flex flex-col md:flex-row ">
        <img
          className="w-full mb-9 md:mb-0 md:max-w-[400px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 items-start">
          <p className="font-semibold text-lg text-gray-700">OUR OFFICE</p>
          <p className="text-gray-500">
            54709 Willms Stations <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415)555-0132 <br />
            Email: gwolojulius2@gmail.com
          </p>
          <p>Careers at Prescripto</p>
          <p>Learn more about our team and job openings</p>
          <button>Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
