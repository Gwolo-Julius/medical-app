import React, { useState } from "react";
import { assets } from "../assets/assets";

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
      {userData.name}
    </div>
  );
};

export default MyProfile;
