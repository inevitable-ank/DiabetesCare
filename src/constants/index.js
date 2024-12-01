// import { records, screening, user, apps } from "../assets";

// export const navlinks = [
//   {
//     name: "dashboard",
//     imgUrl: apps,
//     link: "/",
//   },
//   {
//     name: "records",
//     imgUrl: records,
//     link: "/medical-records",
//   },
//   {
//     name: "screening",
//     imgUrl: screening,
//     link: "/screening-schedules",
//   },

//   {
//     name: "profile",
//     imgUrl: user,
//     link: "/profile",
//   },
// ];

// import {
//   IconDashboard,
//   IconFileText,
//   IconScreenShare,
//   IconUser,
// } from "@tabler/icons-react";

// export const navlinks = [
//   {
//     name: "dashboard",
//     imgUrl: <IconDashboard size={24} color="currentColor" />,
//     link: "/",
//   },
//   {
//     name: "records",
//     imgUrl: <IconFileText size={24} color="currentColor" />,
//     link: "/medical-records",
//   },
//   {
//     name: "screening",
//     imgUrl: <IconScreenShare size={24} color="currentColor" />,
//     link: "/screening-schedules",
//   },
//   {
//     name: "profile",
//     imgUrl: <IconUser size={24} color="currentColor" />,
//     link: "/profile",
//   },
// ];

import {
  IconDashboard,
  IconFileText,
  IconCalendar,
  IconUser,
} from "@tabler/icons-react";

export const navlinks = [
  {
    name: "dashboard",
    icon: IconDashboard, // Referencing the component directly
    link: "/",
  },
  {
    name: "records",
    icon: IconFileText,
    link: "/medical-records",
  },
  {
    name: "screening",
    icon: IconCalendar,
    link: "/screening-schedules",
  },
  {
    name: "profile",
    icon: IconUser,
    link: "/profile",
  },
];

