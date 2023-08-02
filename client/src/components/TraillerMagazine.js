import React from "react";
import { useParams } from "react-router-dom";
import "../Scss/magazinelist.css";

function TraillerMagazine({ magazines, ping, setping }) {
  const params = useParams();
  const maga = magazines?.filter((el) => el?._id === params.id)[0];
  console.log(maga);
  return (
    <div className="trailler">
      <div className="content_trailler">
        <p
          style={{
            margin: "20px 0 0 20px",
            fontFamily: "serif",
            fontStyle: "inherit",
            textTransform: "uppercase",
            fontWeight: "15px",
            textDecoration:"underline",
            color:"#3073D7"
          }}
        >
          {maga?.title}
        </p>
        <h1
          style={{
            fontFamily: "cursive",
            fontStyle: "italic",
            fontWeight: "700",
            fontSize: "2.2rem",
            width: "50%",
            marginLeft: "20rem",
            marginTop: "6rem",
            
          }}
        >
          {maga?.subtitle}
        </h1>
        <p
          style={{
            fontFamily: "serif",
            fontSize: "1.3rem",
            width: "50%",
            marginLeft: "20rem",
            color: "#363636",
          }}
        >
          A panel of experts said there was insufficient evidence about many
          drugs that have been considered as possible remedies for coronavirus
          patients, including some President Trump has advocated.
        </p>
        <hr style={{width:"53%", marginLeft:"18rem"}}/>
        <div style={{ width: "50%" }}>
          <img
            src={maga?.image}
            alt=""
            style={{ height: "400px", width: "600px", margin:"1rem 0 0 20rem"}}
          />
        </div>
        <p style={{
            fontFamily: "serif",
            fontSize: "0.99rem",
            lineHeight:"1.25rem",
            width: "45%",
            marginLeft: "20rem",
            color: "#7B7976",
            marginTop:"0.5rem"
          }}>
          The panel specifically advised against the malaria drug
          hydroxychloroquine, which was associated with an increased risk of
          death.Credit...Ben Margot/Associated Press
        </p>
        <span style={{marginLeft:"20rem", fontFamily:"cursive", fontSize:"0.7rem"}}>{maga?.date}</span>
        <p 
        style={{
            fontFamily: "serif",
            fontSize: "1.3rem",
            width: "45%",
            marginLeft: "20rem",
            marginTop:"0.5rem",
            color: "#363636",
            textAlign:"justify"
          }}>
          The federal agency led by Dr. Anthony Fauci issued guidelines on
          Tuesday that stated there is no proven drug for treating coronavirus
          patients, a finding that essentially reinforces Dr. Fauci’s dissent
          from President Trump’s repeated promotion of certain drugs without
          evidence to support their use. The report echoed what frustrated
          doctors already know: Not enough is known about the highly infectious
          virus or how to combat it. Months into the pandemic, a panel of
          experts convened by the research center Dr. Fauci leads, the National
          Institute of Allergy and Infectious Diseases, concluded that whenever
          possible, drug therapy should be given as part of a clinical trial, so
          that data can be collected to determine whether treatments work. At
          the White House briefing, Mr. Trump said he had not seen the panel’s
          guidelines. Dr. Fauci, who often attends the briefings, was not there
          on Tuesday.
        </p>
        <p style={{
            fontFamily: "serif",
            fontSize: "1.3rem",
            width: "45%",
            marginLeft: "20rem",
            marginTop:"0.5rem",
            color: "#363636",
            textAlign:"justify"
          }}>
          Dr. Fauci has repeatedly pushed back at the president’s enthusiasm
          over the malaria drugs hydroxychloroquine and chloroquine, sometimes
          disagreeing in public with Mr. Trump. For weeks Dr. Fauci has stressed
          the lack of scientific evidence to back up any potential treatment,
          and this new document, which includes the expertise of more than a
          dozen federal agencies and professional groups, underscores his
          reasoning.
        </p>
      </div>
    </div>
  );
}

export default TraillerMagazine;
