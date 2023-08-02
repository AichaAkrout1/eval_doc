import React from "react";
import "../Scss/header.css";
import headerimg from "../assets/images/header-img.jpg";
import { BsSearch } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import About from "./About";
import MagazineList from "./MagazineList";

function Header({ping, setping}) {
  return (
    <div className="heade">
      <img src={headerimg} alt="" /> 
      <div className="content-header">
        <div className="icon-search">
          <BsSearch />
        </div>
        <input
          type="text"
          name="Name or Doctor Speciality"
          placeholder="Name or Doctor Speciality*"
          required
          style={{
            width: "464px",
            height: "47px",
            background: "rgb(20 51 149)",
            border: "none",
          }}
        />
        <div className="icon-search">
          <FaLocationDot style={{ marginLeft: "55rem" }} />
        </div>
        <input
          type="text"
          name="Name or Doctor Speciality"
          placeholder="Find your location Or Enter a city*"
          required
          style={{
            width: "464px",
            height: "47px",
            background: "rgb(48 115 215)",
            border: "none",
          }}
        />
        <button className="btn-search">Research</button>
      </div>
      <div>
        <p
          style={{
            textAlign: "center",
            color: "rgb(46 50 56)",
            fontSize: "0.8rem",
            fontFamily:"sans-serif",
            fontWeight:"600",
            marginTop:"1.7rem"
          }}
        >
          You must enter a city or a postal code or geolocate yourself
        </p>
      </div>
      <div className="title-header">
        <p>Find the right doctor! Evaluate and give an opinion on a doctor!</p>
      </div>
      <About/>
      <MagazineList ping={ping} setping={setping}/>
    </div>
  );
}

export default Header;
