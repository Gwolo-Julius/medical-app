import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div className="">
      <p>My Appointments</p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div key={index}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.speciality}</p>
              <p>Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p>
                <span>Date & time:</span> 25, December, 2024 | 10:30 PM
              </p>
            </div>
            <div></div>
            <div>
              <button>Pay online</button>
              <button>Cancel appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
