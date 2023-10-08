import Carousel from "react-bootstrap/Carousel";

import React from "react";

const Carouseel = () => {
  return (
    <div
      className="h-50px w-50px"
      id="carousel"
      style={{ maxHeight: "300px", maxWidth: "400px", margin: "0 auto" }}
    >
      <center>
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/900×700/?cooldrinks"
              alt="Second slide"  style={{height:"200px",objectFit:"fill"}}
            />
            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/900×700/?rooms"
              alt="Second slide"  style={{height:"200px",objectFit:"fill"}}
            />
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/900×700/?food"
              alt="third slide"  style={{ height:"200px",objectFit:"fill"}}
            />
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </center>
    </div>
  );
};

export default Carouseel;
