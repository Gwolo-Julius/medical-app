import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="header flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300">
      <img
        onClick={() => navigate("/")}
        className="w-40 cursor-pointer"
        src={assets.logo}
        alt="logo"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="active py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/4 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/4 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/4 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/4 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center cursor-pointer gap-2 group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-[30px] right-0 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded  flex flex-col">
                <div
                  onClick={() => navigate("my-profile")}
                  className="w-full hover:bg-stone-400 hover:text-white px-4 py-1"
                >
                  My Profile
                </div>
                <div
                  onClick={() => navigate("my-appointment")}
                  className="w-full hover:bg-stone-400 hover:text-white px-4 py-1"
                >
                  My Appointments
                </div>
                <div
                  onClick={() => setToken(false)}
                  className="w-full hover:bg-stone-400 hover:text-white px-4 py-1"
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
        {/* @@@@@@@@@ Mobile Menu @@@@@@@@@@ */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 bottom-0 top-0 left-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between py-6 px-5">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center mt-6 px-5 gap-4 font-medium text-xl">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="py-2 px-4 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="py-2 px-4 rounded inline-block">ALL DOCTORS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="py-2 px-4 rounded inline-block">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="py-2 px-4 rounded inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
