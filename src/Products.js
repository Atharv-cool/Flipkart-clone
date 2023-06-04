import { useState, useEffect, useContext } from "react";

import React from "react";
import "./Products.css";
import { productData } from "./App";

function Products() {
  const { getData, apiState } = useContext(productData);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000${apiState}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const addToCart = (product) => {
    const newItem = {
      id: Math.random().toString(),
      title: product.title,
      price: product.price,
      rating: product.rating,
      url: product.url,
    };
    getData(newItem);
    console.log(newItem);
  };

  return (
    <div className="product-row">
      {products.map((product) => (
        <div className="product">
          <div className="product-info">
            <p>{product.title}</p>
            <p>
              <strong>${product.price}</strong>
            </p>
            <div className="rating">
              {Array(Math.floor(product.rating))
                .fill()
                .map(() => (
                  <p>⭐</p>
                ))}
            </div>
          </div>
          <img className="products-image" src={product.url} alt="product-img" />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
