import React from "react";
import { useContext } from "react";
import { productData } from "./App";
import "./Cart.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
function Carts() {
  const { CartData, deleteItem } = useContext(productData);
  console.log(CartData);
  const handleClick = (id) => {
    deleteItem(id);
  };
  return (
    <div>
      <div className="cart__navbar">
        <div className="navbar__logos">
          <Link to="/" className="navbar__logos">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="Flipkart icon"
            />
            <div className="navbar__logo1">
              <span
                style={{
                  fontSize: "11px",
                  paddingRight: "2px",
                  color: "white",
                  fontStyle: "italic",
                }}
              >
                Explore
              </span>
              <span
                style={{
                  color: "#F9E107",
                  fontSize: "11px",
                  fontStyle: "italic",
                }}
              >
                Plus
              </span>
              <span>
                <img
                  width="10"
                  src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt=""
                />
              </span>
            </div>
          </Link>
          <div className="navbar__searchs">
            <input
              placeholder="Search for products,brands and more"
              type="text"
            />
            <SearchIcon />
          </div>
          <Link to="/login">
            <div className="navbar__logins">
              <button>Login</button>
            </div>
          </Link>
        </div>
      </div>
      {CartData.length > 0 ? (
        CartData.map((item) => (
          <div className="cart__best">
            <div className="cart__cover">
              <img src={item.url} className="product__image2" alt="error" />
            </div>

            <div className="cart__third">
              <p className="cart__text">{item.name}</p>
              <p className="cart__rs">{item.price} </p>
              <p className="cart__para">{item.dis}</p>
            </div>
            <button
              className="red__button"
              onClick={() => handleClick(item.id)}
            >
              Remove from Cart
            </button>
          </div>
        ))
      ) : (
        <>
          <div className="cart-container">
            {/* <div className="cart-items">{cart.length}</div> */}
            <div className="cart-empty-message">
              <h1>NO ITEM!!</h1>
              <h3>Your cart is empty</h3>
              <p>Add some items to see them here...</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Carts;
