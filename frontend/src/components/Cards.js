import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useCart,useDispatchCart } from "./ContextReducer";
const Cards = () => {

  const pric =100;
  const data=useCart()
const dispatch=useDispatchCart()
  const handle=async ()=>{
  await dispatch({type:"ADD",price:pric})
 console.log(data)

}

  return (
    <Col xs={12} md={6} lg={4} xl={3}>
      <Card className="m-2">
        <Card.Img
          variant="top"
          src="https://source.unsplash.com/random/100px180/?pizza"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <div className="d-flex align-items-center">
            <select name="" id="" className="bg-info m-2 rounded">
              {Array.from(Array(6), (e, i) => (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select name="" id="" className="bg-info rounded">
              <option value="full">full</option>
              <option value="half">half</option>
            </select>
         
              <button className="btn btn-primary " onClick={handle}>ADD</button>
        
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
