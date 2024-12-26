import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div className="">
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div
            className="grid grid-col-[1fr_2fr] border-b gap-4 sm:flex sm:gap-6 py-2"
            key={index}
          >
            <div>
              <img className="bg-indigo-50 w-32" src={item.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="font-semibold text-neutral-800">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-zinc-700 mt-1 font-medium ">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-xs mt-1">
                <span className="text-sm font-medium text-neutral-700 ">
                  Date & time:
                </span>
                25, December, 2024 | 10:30 PM
              </p>
            </div>
            <div></div>
            <div className="flex flex-col justify-end gap-2">
              <button className="text-sm text-stone-500 sm:min-w-48 border rounded py-2 hover:bg-primary transition-all duration-300 hover:text-white">Pay online</button>
              <button className="text-sm text-stone-500 sm:min-w-48 border rounded py-2 hover:bg-red-500 transition-all duration-300 hover:text-white">Cancel appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
