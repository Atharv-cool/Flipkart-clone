import React from "react";
import "./Carsoule.css";
function Carsoule() {
  return (
    <div className="style">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/8004714882715592.jpg?q=50"
              className="d-block w-100"
              alt="Sale"
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/a2d9e39f397fe24d.jpeg?q=50"
              className="d-block w-100"
              alt="Laptop"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/c5918e488ff6b784.jpg?q=50"
              className="d-block w-100"
              alt="Flight"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/flap/3376/560/image/75a15c3e19c3f7de.jpg?q=50"
              className="d-block w-100"
              alt="Furniter"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/0af653e5140747b0.jpg?q=50"
              className="d-block w-100"
              alt="Flight-2"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carsoule;
