import React from "react";
import { TbDental } from "react-icons/tb";
import "../Scss/medicalquestion.css";
import {FaHeartPulse} from "react-icons/fa6";
import {PiStethoscopeDuotone} from "react-icons/pi";
import {GiFetus, GiStomach, GiInternalInjury, GiHumanEar, GiHairStrands, GiSemiClosedEye} from "react-icons/gi"


function Medicalquestion() {
  return (
    <div className="Question">
      <h1
        style={{
          marginLeft: "80px",
          fontFamily: "serif",
          textDecoration: "underline",
        }}
      >
        Medical Questions
      </h1>
  <div className="boxQust">
    <a href="" style={{textDecoration:"none", color:"black"}}>
      <div className="subQuestion">
        <div className="speciality">
          <TbDental className="icon-dent"/>
          <p style={{marginTop:"6px", fontFamily:"serif"}}>Dental Medicine</p>
        </div>

      </div>
      </a>
      <a href="" style={{textDecoration:"none", color:"black"}}>
      <div className="subQuestion">
        <div className="speciality">
          <FaHeartPulse className="icon-dent"/>
          <p style={{marginTop:"6px", fontFamily:"serif"}}>Cardiology</p>
        </div>
        </div>
        </a>
      <a href="" style={{textDecoration:"none", color:"black"}}>
      <div className="subQuestion">
        <div className="speciality">
          <PiStethoscopeDuotone className="icon-dent"/>
          <p style={{marginTop:"6px", fontFamily:"serif"}}>Sexology</p>
        </div>

      </div>
      </a>
      <a href="" style={{textDecoration:"none", color:"black"}}>
      <div className="subQuestion">
        <div className="speciality">
          <GiFetus className="icon-dent"/>
          <p style={{marginTop:"6px", fontFamily:"serif"}}>Gynecology</p>
        </div>
      </div>
      </a>  
      
      <a href="" style={{textDecoration:"none", color:"black"}}>
      <div className="subQuestion">
        <div className="speciality">
          <GiStomach className="icon-dent"/>
          <p style={{marginTop:"6px", fontFamily:"serif"}}>gastroenterologist</p>
        </div>
        
      </div>
      </a> 
      <a href="" style={{textDecoration:"none", color:"black"}}>
      <div className="subQuestion">
        <div className="speciality">
          <PiStethoscopeDuotone className="icon-dent"/>
          <p style={{marginTop:"6px", fontFamily:"serif"}}>Pediatrics</p>
        </div>
        
      </div>
      </a> 
      <a href="" style={{textDecoration:"none", color:"black"}}>
      <div className="subQuestion">
        <div className="speciality" >
          <GiInternalInjury className="icon-dent"/>
          <p style={{marginTop:"6px", fontFamily:"serif"}}>Traumatology</p>
        </div>
        
      </div>
      </a> 
      <a href="" style={{textDecoration:"none", color:"black"}}>
      <div className="subQuestion">
        <div className="speciality">
          <GiHumanEar className="icon-dent"/>
          <p style={{marginTop:"6px", fontFamily:"serif"}}>Otorhinolaryngology</p>
        </div>
        
      </div>
      </a> 
      <a href="" style={{textDecoration:"none", color:"black"}}>
      <div className="subQuestion">
        <div className="speciality">
          <GiHairStrands className="icon-dent"/>
          <p style={{marginTop:"6px", fontFamily:"serif"}}>Dermatology</p>
        </div>
        
      </div>
      </a> 

      <a href="" style={{textDecoration:"none", color:"black"}}>
      <div className="subQuestion">
        <div className="speciality">
          <GiSemiClosedEye className="icon-dent"/>
          <p style={{marginTop:"6px", fontFamily:"serif"}}>Ophthalmology</p>
        </div>
        
      </div>
      </a> 
      <a href="" style={{textDecoration:"none", color:"black"}}>
      <div className="subQuestion">
        <div className="speciality">
          <GiSemiClosedEye className="icon-dent"/>
          <p style={{marginTop:"6px", fontFamily:"serif"}}>Ophthalmology</p>
        </div>
        
      </div>
      </a>
      <a href="" style={{textDecoration:"none", color:"black"}}>
      <div className="subQuestion">
        <div className="speciality">
          <GiSemiClosedEye className="icon-dent"/>
          <p style={{marginTop:"6px", fontFamily:"serif"}}>Ophthalmology</p>
        </div>
        
      </div>
      </a>
      </div>
    </div>
  );
  
}

export default Medicalquestion;
