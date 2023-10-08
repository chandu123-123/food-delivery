import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

import BNavbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Navbar = () =>
 {  const navigate=useNavigate()
  return (
    <BNavbar expand="lg"  bg="info" className="bg-dark-aria">
      <Container>
        <BNavbar.Brand className="fs-1 fst-italic" to="/">KAAWO</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
          <Link to="/" className="nav-link fs-5">Home</Link>
          <div>

          {(!localStorage.getItem("authtoken"))?"":
          <Link to="/login" className="nav-link fs-5 me-4 ">Orders</Link>}
          </div>
         </Nav>
         {(localStorage.getItem("authtoken"))?


<div className="d-flex">
<div>

  <Link to="/Cart" className="nav-link fs-5 me-4 ">Cart</Link>

</div>
<div>
<button className="nav-link fs-5 me-4 btn text-danger btn-primary" onClick={()=>{localStorage.removeItem("authtoken");navigate("/login")}}>Logout</button>
</div>

     
   </div>
         : 
          <div className="d-flex">
       <div>

            <Link to="/login" className="nav-link fs-5 me-4 ">Login</Link> 
       </div>
       <div>
       <Link to="/signup" className="nav-link fs-5">Signup</Link> 
       </div>

            
          </div>}
        
        </BNavbar.Collapse>
        
      
      </Container>
    </BNavbar>
  );
};

export default Navbar;
