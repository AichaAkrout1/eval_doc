import React from "react";


import {
  BsSearch,
  BsFillHeartFill,
  BsFillJournalBookmarkFill,
} from "react-icons/bs";
import "../Scss/about.css";
import Medicalquestion from "./Medicalquestion";
import CounterPage from "./CounterPage";

function About() {
  return (
    <div className="about">
      <div className="subAbout">
        <div className="cardAbout">
          <div className="icons-about">
            <BsSearch style={{color:"#0066E5"}} />
          </div>
          <h1>Find a Doctor</h1>
          <p>
            Consult patient reviews and find the specialist that suits your
            needs among the 180,000 doctors listed.
          </p>
        </div>
        <div className="cardAbout">
          <div className="icons-about">
            <BsFillHeartFill style={{color:"#00A100"}} />
          </div>
          <h1>Leave your opinion</h1>
          <p>
            Evaluate the relationship with your doctor and share your experience
            with other patients.
          </p>
        </div>
        <div className="cardAbout">
          <div className="icons-about">
            <BsFillJournalBookmarkFill style={{color:"#FF9400"}} />
          </div>
          <h1>Take Advise</h1>
          <p>
            consult advice and articles from our site that correspond to your
            health.
          </p>
        </div>
      </div>
      <Medicalquestion/>
      <CounterPage/>
    </div>
  );
}

export default About;
