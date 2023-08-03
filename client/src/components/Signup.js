import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../Scss/login.css";
import Logo from "../assets/images/logo.png";
import { FacebookLoginButton } from "react-social-login-buttons";
import {LoginSocialFacebook} from "reactjs-social-login"

function Signup() {
    const [Profile, setProfile] = useState(null)
  return (
    <div
      className="signup template d-flex justify-content-center align-items-center 100-w vh-100 "
      style={{ background: "#F1F1F1" }}
    >
      <div
        className="40-w p-g rounded bg-white"
        style={{ width: "500px", height: "600px" }}
      >
        <Form>
          <img src={Logo} alt="" style={{ margin: "40px 0 0 80px" }} />
          <h3 className="text-center" style={{marginTop:"20px", fontFamily:"serif"}}>Sign Up</h3>
          <div
            className="mb-2"
            style={{ width: "300px", margin: "50px 0 0 80px" }}
          >
            <label htmlFor="First Name" style={{fontFamily:"serif"}}>First Name</label>
            <Form.Control
              type="email"
              placeholder="Enter First Name"
              className="form-control placelogin"
            />
          </div>
          <div
            className="mb-2"
            style={{ width: "300px", margin: "20px 0 0 80px" }}
          >
            <label htmlFor="Last Name" style={{fontFamily:"serif"}}>Last Name</label>
            <Form.Control
              type="email"
              placeholder="Enter Last Name"
              className="form-control placelogin"
            />
          </div>
          <div
            className="mb-2"
            style={{ width: "300px", margin: "20px 0 0 80px" }}
          >
            <label htmlFor="password" style={{fontFamily:"serif"}}>Passwords</label>
            <Form.Control
              type="email"
              placeholder="Enter password"
              className="form-control placelogin"
            />
          </div>
          <div className="mb-2" style={{ margin: "20px 0 0 80px" }}>
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
              style={{ marginRight: "5px" }}
            />
            <label htmlFor="check" className="custom-input-label ms-2" style={{fontFamily:"serif"}}>
              Remember me
            </label>
          </div>
          <div className="d-grid mt-2">
            <button
              className="btn btn-primary"
              style={{
                width: "300px",
                margin: "15px 0 0 80px",
                fontSize: "15px",
                fontWeight: "bold",
                fontFamily:"serif"
              }}
            >
              Sign Up
            </button>
          </div>
          <p className="text-end mt-2" style={{margin:"8px 120px 0 0" ,fontFamily:"serif"}}>
            Already Registered 
            <Link to="/login" style={{textDecoration:"none", color:"#005edd", fontSize:"0.9rem"}} className="ms-2">Sign In</Link>
          </p>
        </Form>
      </div>
      <div>
      {!Profile ? <LoginSocialFacebook
      appId='184005557879077'
      onResolve={(response) =>{
        console.log(response)
        setProfile(response?.data)
      }}
      onReject={(error) =>{
        console.log(error)
    }} 
      >
        <FacebookLoginButton/>
      </LoginSocialFacebook>: ""}
      {Profile? <div>
        <h1>{Profile.name}</h1>
        <img src={Profile.picture.data.url}/>
      </div> :""};
      </div>
      
      
    </div>
  )
}

export default Signup