// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// // import { sun } from "../assets";
// import { navlinks } from "../constants";
// import { IconHeartHandshake, IconSun } from "@tabler/icons-react";

// const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
//   <div
//     className={`h-[48px] w-[48px] rounded-[10px] ${
//       isActive && isActive === name && "bg-[#2c2f32]"
//     } flex items-center justify-center ${
//       !disabled && "cursor-pointer"
//     } ${styles}`}
//     onClick={handleClick}
//   >
//     {!isActive ? (
//       <img src={imgUrl} alt="fund_logo" className="h-6 w-6" />
//     ) : (
//       <img
//         src={imgUrl}
//         alt="fund_logo"
//         className={`h-6 w-6 ${isActive !== name && "grayscale"}`}
//       />
//     )}
//   </div>
// );

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [isActive, setIsActive] = useState("dashboard");

//   return (
//     <div className="sticky top-5 flex h-[93vh] flex-col items-center justify-between">
//       <Link to="/">
//         <div className="rounded-[10px] bg-[#2c2f32] p-2">
//           <IconHeartHandshake size={40} color="#1ec070" className=" " />
//         </div>
//       </Link>

//       <div className="mt-12 flex w-[76px] flex-1 flex-col items-center justify-between rounded-[20px] bg-[#969ee7] py-4">
//         <div className="flex flex-col items-center justify-center gap-3">
//           {navlinks.map((link) => (
//             <Icon
//               key={link.name}
//               {...link}
//               isActive={isActive}
//               handleClick={() => {
//                 if (!link.disabled) {
//                   setIsActive(link.name);
//                   navigate(link.link);
//                 }
//               }}
//             />
//           ))}
//         </div>

//         {/* <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun}/> */}
//         <div
//           className="bg-[#1c1c24] shadow-secondary flex h-[48px] w-[48px] items-center justify-center rounded-[10px] cursor-pointer"
//           onClick={() => {
//             console.log("Sun icon clicked");
//           }}
//         >
//           <IconSun size={24} color="#f5c542" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { navlinks } from "../constants";
// import { IconHeartHandshake, IconSun } from "@tabler/icons-react";

// const Icon = ({ styles, name,icon: IconComponent, isActive, disabled, handleClick }) => (
//   <div
//     className={`h-[48px] w-[48px] rounded-[10px] ${
//       isActive === name ? "bg-[#2c2f32]" : ""
//     } flex items-center justify-center ${
//       !disabled ? "cursor-pointer" : ""
//     } ${styles}`}
//     onClick={handleClick}
//   >
//     <IconComponent
//       size={24}
//       className={`${isActive !== name ? "opacity-50" : ""}`}
//     />
//   </div>
// );

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [isActive, setIsActive] = useState("dashboard");

//   return (
//     <div className="sticky top-5 flex h-[93vh] flex-col items-center justify-between">
//       <Link to="/">
//         <div className="rounded-[10px] bg-[#2c2f32] p-2">
//           <IconHeartHandshake size={40} color="#1ec070" />
//         </div>
//       </Link>

//       <div className="mt-12 flex w-[76px] flex-1 flex-col items-center justify-between rounded-[20px] bg-[#969ee7] py-4">
//         <div className="flex flex-col items-center justify-center gap-3">
//           {navlinks.map((link) => (
//             <Icon
//               key={link.name}
//               {...link}
//               isActive={isActive}
//               handleClick={() => {
//                 if (!link.disabled) {
//                   setIsActive(link.name);
//                   navigate(link.link);
//                 }
//               }}
//             />
//           ))}
//         </div>

//         <div
//           className="bg-[#1c1c24] shadow-secondary flex h-[48px] w-[48px] items-center justify-center rounded-[10px] cursor-pointer"
//           onClick={() => console.log("Sun icon clicked")}
//         >
//           <IconSun size={24} color="#f5c542" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navlinks } from "../constants";
import { IconHeartHandshake, IconSun } from "@tabler/icons-react";

const Icon = ({ styles, name, icon: IconComponent, isActive, disabled, handleClick }) => (
  <div
    className={`h-[48px] w-[48px] rounded-[10px] flex items-center justify-center cursor-pointer ${styles} ${
      isActive === name ? "bg-[#2c2f32] outline outline-4 outline-green-500" : "bg-[#2c2f32]"
    } transition-all duration-200 ease-in-out relative`}
    onClick={handleClick}
  >
    <IconComponent
      size={24}
      className="text-white" // Always white, regardless of active state
    />
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="sticky top-5 flex h-[93vh] flex-col items-center justify-between">
      <Link to="/">
        <div className="rounded-[10px] bg-[#2c2f32] p-2">
          <IconHeartHandshake size={40} color="#1ec070" />
        </div>
      </Link>

      <div className="mt-12 flex w-[76px] flex-1 flex-col items-center justify-between rounded-[20px] bg-[#969ee7] py-4">
        <div className="flex flex-col items-center justify-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        <div
          className="bg-[#1c1c24] shadow-secondary flex h-[48px] w-[48px] items-center justify-center rounded-[10px] cursor-pointer"
          onClick={() => console.log("Sun icon clicked")}
        >
          <IconSun size={24} color="#f5c542" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
