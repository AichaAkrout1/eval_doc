import React, { useState } from "react";
import { FaComments } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import "../Scss/counterpage.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function CounterPage() {
  const [counter, setcounter] = useState(false);
  return (
    <div className="maincount">
      <div className="submain">
        <div className="countcard">
          <div className="iconcount">
            <FaUserDoctor />
          </div>
          <ScrollTrigger
            onEnter={() => setcounter(true)}
            onExit={() => setcounter(false)}
          >
            <span>
                {counter && <CountUp start={0} end={1000} duration={2} delay={0} />}
              
            </span>
          </ScrollTrigger>
          <p>Doctors</p>
        </div>
        <div className="countcard">
          <div className="iconcount">
            <FaComments />
          </div>
          <ScrollTrigger
            onEnter={() => setcounter(true)}
            onExit={() => setcounter(false)}
          >
            <span>
                {counter && <CountUp start={60} end={3401} duration={2} delay={0} />}
              
            </span>
          </ScrollTrigger>
          <p>Comments</p>
        </div>
        <div className="countcard">
          <div className="iconcount">
            <IoNewspaperOutline />
          </div>
          <ScrollTrigger
            onEnter={() => setcounter(true)}
            onExit={() => setcounter(false)}
          >
            <span>
                {counter && <CountUp start={0} end={930} duration={2} delay={0} />}
              
            </span>
          </ScrollTrigger>
          <p>Articls</p>
        </div>
      </div>
    </div>
  );
}

export default CounterPage;
