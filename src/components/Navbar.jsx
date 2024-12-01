import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";
import { useStateContext } from "../context"; // Adjust the import path

import CustomButton from "./CustomButton";
// import { menu, search } from "../assets";
import { navlinks } from "../constants";
import { IconHeartHandshake } from "@tabler/icons-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { ready, authenticated, login, user, logout } = usePrivy();
  const { fetchUsers, users, fetchUserRecords } = useStateContext();

  const fetchUserInfo = useCallback(async () => {
    if (!user) return;

    try {
      await fetchUsers();
      const existingUser = users.find(
        (u) => u.createdBy === user.email.address
      );
      if (existingUser) {
        await fetchUserRecords(user.email.address);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }, [user, fetchUsers, users, fetchUserRecords]);

  useEffect(() => {
    if (authenticated && user) {
      // fetchUserInfo();
    }
  }, [authenticated, user, fetchUserInfo]);
  console.log("user Info", user);

  const handleLoginLogout = useCallback(() => {
    if (authenticated) {
      logout();
    } else {
      login().then(() => {
        if (user) {
          fetchUserInfo();
          console.log(user);
        }
      });
    }
  }, [authenticated, login, logout, user]);

  return (
    <div className="mb-[35px] flex flex-col-reverse justify-between gap-6 md:flex-row">
      {/* Wrapper for Label and Input */}
      <div className="flex w-full max-w-[458px] items-center lg:flex-1">
  {/* Diabetes Care Label */}
  <div className="relative flex-shrink-0 flex items-center gap-2">
    {/* Text */}
    <p className="bg-gradient-to-r from-[#1dc071] via-[#6edca3] to-[#1dc071] bg-clip-text text-[18px] font-extrabold text-transparent sm:text-[20px]">
      Diabetes Care
    </p>

    {/* Heart Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-green-400 animate-pulse"
      style={{
        fill: "url(#green-gradient)", // Adding gradient fill
      }}
    >
      <defs>
        <linearGradient id="green-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#1dc071" }} />
          <stop offset="50%" style={{ stopColor: "#6edca3" }} />
          <stop offset="100%" style={{ stopColor: "#1dc071" }} />
        </linearGradient>
      </defs>
      <path d="M20.84 4.61c-1.54-1.54-4.04-1.54-5.58 0l-.71.71-.71-.71c-1.54-1.54-4.04-1.54-5.58 0-1.54 1.54-1.54 4.04 0 5.58l6.29 6.29 6.29-6.29c1.54-1.54 1.54-4.04 0-5.58z"></path>
    </svg>

    {/* Glowing Underline */}
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#1dc071] via-[#6edca3] to-[#1dc071] animate-pulse"></span>
  </div>

  {/* Input Box */}
  <div className="ml-4 flex h-[52px] flex-1 flex-row items-center rounded-[100px] bg-[#8181d3] py-2 pl-4 pr-2">
    <input
      type="text"
      placeholder="Search for records"
      className="flex w-full bg-transparent font-epilogue text-[14px] font-normal text-white outline-none placeholder:text-[#000000]"
    />
    <div className="flex h-full w-[72px] cursor-pointer items-center justify-center rounded-[20px] bg-[#969ee7]">
      <img
        // src={search}
        alt="search"
        className="h-[15px] w-[15px] object-contain"
      />
    </div>
  </div>
</div>

      {/* Login/Logout Button */}
      <div className="hidden flex-row justify-end gap-2 sm:flex">
        <CustomButton
          btnType="button"
          title={authenticated ? "Log Out" : "Log In"}
          styles={authenticated ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={handleLoginLogout}
        />
      </div>

      {/* Mobile Menu */}
      <div className="relative flex items-center justify-between sm:hidden">
        <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[10px] bg-[#646467]">
          <IconHeartHandshake size={40} color="#1dc071" className="p-2" />
        </div>
        <img
          // src={menu}
          alt="menu"
          className="h-[34px] w-[34px] cursor-pointer object-contain"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />
        <div
          className={`absolute left-0 right-0 top-[60px] z-10 bg-[#1c1c24] py-4 shadow-secondary ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${
                  isActive === link.name && "bg-[#3a3a43]"
                }`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  // src={link.imgUrl}
                  alt={link.name}
                  className={`h-[24px] w-[24px] object-contain ${
                    isActive === link.name ? "grayscale-0" : "grayscale"
                  }`}
                />
                <p
                  className={`ml-[20px] font-epilogue text-[14px] font-semibold ${
                    isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>
          <div className="mx-4 flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
