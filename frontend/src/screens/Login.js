import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loginFailed, setLoginFailed] = useState(false); // State to track login failure

  const submitt = async (e) => {
    e.preventDefault();

    const url = `${process.env.REACT_APP_API_ENDPOINT}/api/loginuser`;
    const data = {
      email: credentials.email,
      password: credentials.password,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      
      if (responseData.success) {
        localStorage.setItem("authtoken",responseData.authtoken)
        console.log("Successfully logged in");
        // Redirect to the home page on successful login
        navigate("/");
      }
      
      else {
        // Login failed, set loginFailed to true to display the alert
        alert(responseData.message);
        setLoginFailed(true);

        // Display the alert message from the server
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const change = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form onSubmit={submitt}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="Email"
              name="email"
              value={credentials.email}
              onChange={change}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={change}
              value={credentials.password}
            />
          </Col>
        </Form.Group>
        <input type="submit" className="m-3 btn-success" />
      </Form>

      {loginFailed && (
        <div className="alert alert-danger mt-3">
          Login failed. Please check your credentials.
        </div>
      )}
    </div>
  );
};

export default Login;
