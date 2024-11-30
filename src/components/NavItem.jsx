import React from "react";
import { useNavigate } from "react-router-dom";

const NavItem = ({ link, isActive, handleClick }) => {
  return (
    <li
      key={link.name}
      className={`flex p-4 ${isActive === link.name ? "bg-[#3a3a43]" : ""}`}
      onClick={() => handleClick(link)}
    >
      <img
        src={link.imgUrl}
        alt={link.name}
        className={`h-[24px] w-[24px] object-contain ${isActive === link.name ? "grayscale-0" : "grayscale"}`}
      />
      <p
        className={`ml-[20px] font-epilogue text-[14px] font-semibold ${isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"}`}
      >
        {link.name}
      </p>
    </li>
  );
};

export default NavItem;
