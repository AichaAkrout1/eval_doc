// import React, { Component, useState } from "react";
// import FacebookLogin from "react-facebook-login";
// import Form from "react-bootstrap/Form";
// import { Link, useNavigate } from "react-router-dom";
// import "../Scss/login.css";
// import Logo from "../assets/images/logo.png";
// import { useDispatch, useSelector } from "react-redux";

// export default class Register extends Component {
//   state = {
//     isLoggedIn: false,
//     userID: "",
//     name: "",
//     email: "",
//     picture: "",
//   };
//   responseFacebook = response =>{
//     // console.log(response)
//     this.setState({
//         isLoggedIn:true,
//         userID:response?.userID,
//         name:response?.name,
//         email: response?.email,
//         picture:response?.picture?.data?.url,
//     })
//   }

//   componentClicked=() => console.log("clicked")
//   render() {
//     let fbContent;

//     if (this?.state.isLoggedIn) {
//         fbContent=(
//             <div><Link to="/"></Link></div>
//         );
//     } else {
//       fbContent = (
//         <FacebookLogin
//           appId="707939731364247"
//           autoLoad={true}
//           fields="name,email,picture"
//           onClick={this?.componentClicked}
//           callback={this?.responseFacebook}
//         />
//       );
//     }
    
//     return <div>   <div
//     className="signup template d-flex justify-content-center align-items-center 100-w vh-100 "
//     style={{ background: "#F1F1F1" }}
//   >
//     <div
//       className="40-w p-g rounded bg-white"
//       style={{ width: "500px", height: "600px" }}
//     >
//       <Form>
//         <img src={Logo} alt="" style={{ margin: "40px 0 0 80px" }} />
//         <h3 className="text-center" style={{marginTop:"20px", fontFamily:"serif"}}>Sign Up</h3>
//         <div
//           className="mb-2"
//           style={{ width: "300px", margin: "30px 0 0 80px" }}
//         >
//           <label htmlFor="First Name" style={{fontFamily:"serif"}}>First Name</label>
//           <Form.Control
//             type="email"
//             placeholder="Enter First Name"
//             className="form-control placelogin"
//           />
//         </div>
//         <div
//           className="mb-2"
//           style={{ width: "300px", margin: "15px 0 0 80px" }}
//         >
//           <label htmlFor="Last Name" style={{fontFamily:"serif"}}>Last Name</label>
//           <Form.Control
//             type="email"
//             placeholder="Enter Last Name"
//             className="form-control placelogin"
//           />
//         </div>
//         <div
//           className="mb-2"
//           style={{ width: "300px", margin: "15px 0 0 80px" }}
//         >
//           <label htmlFor="email" style={{fontFamily:"serif"}}>Email</label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             className="form-control placelogin"
//           />
//         </div>
//         <div
//           className="mb-2"
//           style={{ width: "300px", margin: "10px 0 0 80px" }}
//         >
//           <label htmlFor="password" style={{fontFamily:"serif"}}>Passwords</label>
//           <Form.Control
//             type="email"
//             placeholder="Enter password"
//             className="form-control placelogin"
//           />
//         </div>
//         <div className="mb-2" style={{ margin: "20px 0 0 80px" }}>
//           <input
//             type="checkbox"
//             className="custom-control custom-checkbox"
//             id="check"
//             style={{ marginRight: "5px" }}
//           />
//           <label htmlFor="check" className="custom-input-label ms-2" style={{fontFamily:"serif"}}>
//             Remember me
//           </label>
//         </div>
//         <div className="d-grid mt-2">
//           <button
//             className="btn btn-primary"
//             style={{
//               width: "300px",
//               margin: "15px 0 0 80px",
//               fontSize: "15px",
//               fontWeight: "bold",
//               fontFamily:"serif"
//             }}
//           >
//             Sign Up
//           </button>
//         </div>
//         <p className="text-end mt-2" style={{margin:"8px 120px 0 0" ,fontFamily:"serif"}}>
//           Already Registered 
//           <Link to="/login" style={{textDecoration:"none", color:"#005edd", fontSize:"0.9rem"}} className="ms-2">Sign In</Link>
//         </p>
//       </Form>
//     </div>
//     {/* {/* <div>
//     {!Profile ? <LoginSocialFacebook
//     appId='184005557879077'
//     onResolve={(response) =>{
//       console.log(response)
//       setProfile(response?.data)
//     }}
//     onReject={(error) =>{
//       console.log(error)
//   }} 
//     >
//       <FacebookLoginButton/>
//     </LoginSocialFacebook>: ""}
//     {Profile? <div>
//       <h1>{Profile.name}</h1>
//       <img src={Profile.picture.data.url}/>
//     </div> :""};
//     </div>
//      */}

//   </div>{fbContent}</div>;
//   }
// }
