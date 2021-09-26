import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [ 
  {
    title: "Dashboard",
    path: "/dashboard",
    // icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Agenda",
    path: "/agenda",
    // icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Budget",
    path: "/budget",
    // icon: <FaIcons.FaMoneyCheck />,
  },
  {
    title: "Your Drive",
    path: "/drive",
    // icon: <FaIcons.FaSave />,
  },
  {
    title: "Chat",
    path: "/chat",
    // description="Put your phone is Landscape mode to create your first chat!"
    // icon: <IoIcons.IoMdPeople />,

    subNav: [
      {
        title: 'Width > 575px to create first chat (Landscape)!',
        // path: '/overview/users',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },

  {
    title: "Settings",
    path: "/update-profile",
    // icon: <IoIcons.IoIosSettings />,
  },
];
