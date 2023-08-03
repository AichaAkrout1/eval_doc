import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillGeoAltFill, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../Scss/doctor.css";
import Rating from "react-rating";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import { useSelector} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TraillerDoctor({ doctors, ping, setping }) {
  const params = useParams();
  const doc = doctors?.filter((el) => el?._id === params.id)[0];
  const user = useSelector((state) => state.user?.user)
  const Avis = useSelector((state) => state.avis?.avisliste)
  console.log(doc);

  const [avis, setavis] = useState({
    image:user?.name,
    nameUser:user?.name,
    IDdoctor:doc?._id,
    nameDoctor:doc?.name && doc?.lastname,
    message:"",
    date:new Date()
  })
  return (
    <div className="ContainerTrailer">
      <div className="HeaderTrailer">
        <div className="TitleTrailer">
      <div style={{marginLeft:"58rem",paddingTop:"8rem", width:"30%", paddingRight:"-1rem"}}>
        <Rating
            placeholderRating= {5}
            placeholderSymbol={<AiFillHeart style={{color:"#00A100"}} className="IconRate"/>}
            emptySymbol={<AiOutlineHeart className="IconRate"/> }
            fullSymbol={<AiFillHeart style={{color:"#00A100"}} className="IconRate"/>}
          />
      </div>
      <div>
          <h1 style={{ paddingTop: "-18rem" }}>
            Dr {doc?.name}
            <span style={{ paddingRight: "-2rem" }}>{doc?.lastname}</span>
          </h1>
          </div>   
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
          style={{
            border: 0,
            marginTop: "2rem",
            width: "700px",
            height: "250px",
            marginLeft: "-3rem",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <Card style={{margin:"5rem 8rem 0 9rem"}}>
      <Card.Header style={{fontSize:"1.5rem", fontFamily:"cursive"}}>Avis</Card.Header>
      {Avis?.filter((el) => el?.nameUser == user?.name).map((el,i) =>
      <Card.Body key={i}>
        <Card.Img variant="top" src={el.image} />
        <Card.Title>{el.nameUser}</Card.Title>
        <Card.Text>
          {el.message}
        </Card.Text>
        <Card.Text>
          {el.date}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      )}
    </Card>
    </div>
  );
}

export default TraillerDoctor;
