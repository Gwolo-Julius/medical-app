import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Input } from "postcss";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "John",
    image: assets.profile_pic,
    email: "johndoe8@gmail.com",
    phone: "+142 859 829 380",
    address: {
      line1: "57 cross, Liverpool",
      line2: "Circle, Church road, London",
    },
    gender: "Male",
    dob: "2000-10-20",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 ">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 border-none h-[1px]" />
      <div>
        <h2 className="text-neutral-500 underline mt-3">CONTACT INFORMATION</h2>
        <div className="grid grid-cols-[1fr,_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email: </p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone: </p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address: </p>
          {isEdit ? (
            <p className="text-gray-500">
              <input
                className="bg-gray-50"
                onChange={() =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-50"
                onChange={() =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="mt-3 underline text-neutral-500">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
          <p>Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p>Birthday: </p>
          {isEdit ? (
            <input
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
              type="date"
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      <div>
        {isEdit ? (
          <button onClick={() => setIsEdit(false)}>Save Information</button>
        ) : (
          <button onClick={() => setIsEdit(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};
export default MyProfile;
