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
    <div className="">
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <div>
        <h2>CONTACT INFORMATION</h2>
        <div>
          <p>Email: </p>
          <p>{userData.email}</p>
          <p>Phone: </p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address: </p>
          {isEdit ? (
            <p>
              <input
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
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
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
  );
};
export default MyProfile;
