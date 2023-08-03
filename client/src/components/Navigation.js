import Logo from "../assets/images/logo.png";
import { LiaUserCircle } from "react-icons/lia";
import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SidebarData";

import "../Scss/Navbar.css";

function Navigation() {
  
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  return (
    // 
    <>
    <IconContext.Provider value={{ color: "#FFF" }}>
      {/* All the icons now are white */}
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <img src={Logo} alt="eval doc" style={{marginLeft:"190px"}}/>
        <Link to="/signup">
        <button
            style={{
              background: "#005DDD",
              color: "#fff",
              width: "130px",
              height: "38px",
              fontSize: "14px",
              borderRadius: "5px",
              border:"none",
              fontFamily: "initial",
              fontWeight: "400",
              marginLeft:"35rem"
            }}
          >
            Register
          </button>
          </Link>
          <Link to="/login">
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontFamily: "initial",
              fontSize:"16px",
            }}
          >
            
            <LiaUserCircle
              style={{ fontSize: "27px", color: "#fff", marginRight: "8px" }}
            />
            Sign in
          </button>
          </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  </>
  );
}

export default Navigation;

