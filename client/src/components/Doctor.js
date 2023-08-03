import React from "react";
import { useSelector } from "react-redux";
import BACKGROUND from "../assets/images/headerdoctor/background.png";
import { FaCity } from "react-icons/fa";
import { BsFillGeoFill, BsFillGeoAltFill, BsSearch } from "react-icons/bs";
import "../Scss/doctor.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"

function Doctor({ ping, setping, text, settext, region, setregion}) {
  const doctors = useSelector((state) => state.doctor?.doctorliste);
  console.log(doctors);
  return (
    <div>
      <Container>
        <figure className="position-relative">
          <img
            src={BACKGROUND}
            alt=""
            style={{ width: "100%", height: "270px", zIndex: "0.009" }}
            className="img-fluid"
          />
          <div className="searchDoctors">
            <div className="icon-search">
              <BsSearch style={{ marginLeft: "1rem" }} />
            </div>
            <input
              type="text"
              name="Name or Doctor Speciality"
              placeholder="Name Of Doctor*"
              required
              onChange={(e) => settext(e.target.value)}
              style={{
                width: "464px",
                height: "47px",
                background: "rgb(20 51 149)",
                border: "none",
              }}
            />
            <div className="icon-search">
              <BsFillGeoFill style={{ marginLeft: "30rem" }} />
            </div>
            <input
              type="text"
              name="Name or Doctor Speciality"
              placeholder="Enter a city*"
              required
              onChange={(e) => setregion(e.target.value)}
              style={{
                width: "464px",
                height: "47px",
                background: "rgb(48 115 215)",
                border: "none",
              }}
            />
          </div>
        </figure>
      </Container>

      <div className="icon-search">
        <BsSearch />
      </div>
      <div className="container-fluid" style={{ width: "50%" }}>
        <div className="row">
          <div className="col-12 mt-3">
            {doctors
              ?.filter((el) =>
                el?.name?.toLowerCase().includes(text.toLowerCase()) &&
                el?.region?.toLowerCase().includes(region.toLowerCase())
              )
              .map((el) => (
                <Link
                  to={`/trailler1/${el._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div
                    className="card"
                    style={{
                      marginBottom: "2rem",
                      boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.75)",
                      border: "none",
                    }}
                  >
                    <div className="card-horizontal">
                      <div className="img-square-wrapper">
                        <img className="" src={el.image} alt="Card image cap" />
                      </div>
                     
                      <div className="card-body">
                        <button
                          className="card-title"
                          style={{
                            width: "180px",
                            height: "47px",
                            borderRadius: "5px",
                            background: "#3073D7",
                            border: "none",
                            color: "#fff",
                          }}
                        >
                          Dr. {el.name} {el.lastname}
                        </button>
                        <div style={{marginLeft:"9rem", marginTop:"-2.3rem"}}>
                        <Rating
                          placeholderRating={5}
                          placeholderSymbol={
                            <AiFillHeart
                              style={{ color: "#00A100" }}
                              className="IconRate"
                            />
                          }
                          emptySymbol={<AiOutlineHeart className="IconRate" />}
                          fullSymbol={
                            <AiFillHeart
                              style={{ color: "#00A100" }}
                              className="IconRate"
                            />
                          }
                        />
                      </div>
                        <p
                          className="card-text"
                          style={{
                            textTransform: "uppercase",
                            color: "#A3A3A3",
                          }}
                        >
                          {el.speciality}
                        </p>
                        <p>
                          <FaCity style={{ color: "#3073D7" }} />
                          Adress: {el.adress}
                        </p>
                        <p>
                          <BsFillGeoAltFill style={{ color: "#3073D7" }}/>{el.region}</p>  
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
