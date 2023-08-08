import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import "../Scss/login.css";
import Logo from "../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/user/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.user);
  console.log('user',user)
  const isAuth =  localStorage.getItem("token");
  const [register, setRegister] = useState({
    image:"",
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [patient, setpatient] = useState({
    email: "",
    password: "",
  });
  return (
    <div
      className="login template d-flex justify-content-center align-items-center 100-w vh-100 "
      style={{ background: "#F1F1F1" }}
    >
      <div
        className="40-w p-g rounded bg-white"
        style={{ width: "500px", height: "600px" }}
      >
        <Form>
          <img src={Logo} alt="" style={{ margin: "40px 0 0 80px" }} />
          <h3 className="text-center" style={{marginTop:"20px", fontFamily:"serif"}}>Sign In</h3>
          <div
            className="mb-2"
            style={{ width: "300px", margin: "50px 0 0 80px" }}
          >
            <label htmlFor="email" style={{fontFamily:"serif"}}>Email address</label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="form-control placelogin"
              onChange={(e) => setpatient({ ...patient, email: e.target.value })}
              
            />
          </div>
          <div
            className="mb-2"
            style={{ width: "300px", margin: "20px 0 0 80px" }}
          >
            <label htmlFor="password" style={{fontFamily:"serif"}}>Passwords</label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              className="form-control placelogin"
              onChange={(e) => setpatient({ ...patient, password: e.target.value })}
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
          <div className="d-grid">
            <button
              className="btn btn-primary"
                 onClick={() => {
                {
                  dispatch(userLogin(patient));
                  // setping(!ping)
                  
                  {isAuth && user?.isAdmin === true || isAuth && user?.isUser === true?(
                     navigate("/")
                  ):
                  navigate("/") 
                  }
                  
                }
              }}
              style={{
                width: "300px",
                margin: "15px 0 0 80px",
                fontSize: "15px",
                fontWeight: "bold",
                fontFamily:"serif"
              }}
            >
              Sign In
            </button>
          </div>
          <p className="text-end mt-2" style={{margin:"8px 120px 0 0" ,fontFamily:"serif"}}>
            Forgot <Link to="" style={{textDecoration:"none", color:"#005edd", fontSize:"0.9rem"}}>Password? </Link>
            <Link to="/signup" style={{textDecoration:"none", color:"#005edd", fontSize:"0.9rem"}} className="ms-2">Sign Up</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;
