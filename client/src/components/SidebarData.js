import React from "react";  

import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa6";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome/>,
    cName: "nav-text"
  },
  {
    title: "About Us",
    path: "/about",
    icon: <MdIcons.MdRoundaboutRight/>,
    cName: "nav-text"
  },
  {
    title: "Magazines List",
    path: "/magazines",
    icon: <FaIcons.FaRegNewspaper />,
    cName: "nav-text"
  },
  {
    title: "Doctors",
    path: "/doctors",
    icon: <FaIcons.FaUserDoctor />,
    cName: "nav-text"
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <MdIcons.MdOutlineContactMail />,
    cName: "nav-text"
  },
  {
    title: "Account",
    path: "/",
    icon: <RiIcons.RiAccountBoxFill />,
    cName: "nav-text"
  }
];
