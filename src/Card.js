import React from "react";
import { useContext } from "react";
import { productData } from "./App";
function Card(props) {
  const { getData } = useContext(productData);
  const handleClick = (event) => {
    event.preventDefault();
    const newItem = {
      id: Math.random().toString(),
      url: props.url,
      name: props.name,
      price: props.price,
      dis: props.dis,
    };
    getData(newItem);
  };
  return (
    <div className="product__best">
      <div className="cover">
        <img src={props.url} className="product__image2" alt="error" />
      </div>

      <div className="product__third">
        <p className="text">{props.name}</p>
        <p className="text__rs">{props.price} </p>
        <p className="text__para">{props.dis}</p>
        <button className="product__button" onClick={handleClick}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
