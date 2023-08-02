import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillGeoAltFill, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../Scss/doctor.css";

function TraillerDoctor({ doctors, ping, setping }) {
  const params = useParams();
  const doc = doctors?.filter((el) => el?._id === params.id)[0];
  console.log(doc);
  return (
    <div className="ContainerTrailer">
      <div className="HeaderTrailer">
        <div className="TitleTrailer">
          <h1 style={{ paddingTop: "160px" }}>
            Dr {doc?.name}<span style={{paddingRight:"-2rem"}}>{doc?.lastname}</span>
          </h1>
        </div>
        <div className="ProfileDoc">
          <div className="imageDoc">
            <img src={doc?.image} alt="" />
            <p>{doc?.region}</p>
          </div>
          <div className="DocInformation">
            <p
              style={{
                color: "#5d5955",
                fontSize: "14px",
                lineHeight: "14px",
                margin: "0 0 20px",
                padding: "0",
                textTransform: "capitalize",
                background: "none",
              }}
            >
              Doctor's Information
            </p>
            <div style={{ paddingBottom: "1rem" }}>
              <BsFillGeoAltFill
                style={{ color: "#999999", marginRight: "0.5rem" }}
              />
              <Link
                to=""
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  color: "black",
                }}
              >
                Adress:
                {doc?.adress}
              </Link>
            </div>
            <div style={{ paddingBottom: "1rem" }}>
              <BsTelephoneFill
                style={{ color: "#999999", marginRight: "0.5rem" }}
              />
              <Link to="" style={{ textDecoration: "none" }}>
                +216
                {doc?.NumberPhone}
              </Link>
            </div>
            <div>
              <MdEmail style={{ color: "#999999", marginRight: "0.5rem" }} />
              <Link to="">{doc?.email}</Link>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3312.192247042673!2d10.098060674878536!3d33.88470232655981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stn!4v1690918233603!5m2!1sen!2stn"
          width={600}
          height={450}
          style={{ border: 0,
          marginTop:"2rem",
          width:"700px",
        height:"250px",
       marginLeft:"-3rem"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default TraillerDoctor;
