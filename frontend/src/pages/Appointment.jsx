import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div className="">
        {/* @@@@@@@@@@@@@@  Doctor's Information @@@@@@@@@@@@@ */}
        <div className="flex md:flex-row sm:flex-col">
          <div className="">
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>

          {/* @@@@@@@@@@@@@@  Doctor's name,degree, @@@@@@@@@@@@@ */}
          <div className="flex-1 border border-gray-400 rounded-lg p-6 py-5 bg-white ml-4 md:ml-4 md:mt-0 mt-[-80px] sm:mt-4 sm:mx-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree}-{docInfo.speciality}
              </p>
              <button className="border py-0.5 px-2 text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/* @@@@@@@@@@@@@@  About @@@@@@@@@@@@@ */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-gray-500 mt-1 text-sm max-w-[700px]">
                {docInfo.about}
              </p>
            </div>
            <p>
              Appointment fee:{" "}
              <span>
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
