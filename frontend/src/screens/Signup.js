import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
  });
  const submitt = (e) => {
    e.preventDefault();

    const url = "http://localhost:5000/api/createuser"; // Replace with your API endpoint URL
    const data = {
      // Add your JSON data to send in the request body
      // Example: { "key1": "value1", "key2": "value2" }
      name: credentials.name,
      location: credentials.location,
      email: credentials.email,
      password: credentials.password,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Serialize the data to JSON format
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("Success:", data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(credentials.name);
  };
  const change = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const changee = (e) => {
    navigate("/login");
  };
  return (
    <div>
      <Form onSubmit={submitt}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="name"
              value={credentials.name}
              onChange={change}
              placeholder="Enter your name"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextLocation">
          <Form.Label column sm="2">
            LOcation
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="location"
              value={credentials.location}
              onChange={change}
            />
          </Col>
        </Form.Group>

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
        <input
          type="button"
          variant="link"
          className="m-3  btn-primary"
          name="login"
          onClick={changee}
          value={"Already user"}
        />
      </Form>
    </div>
  );
};

export default Signup;
