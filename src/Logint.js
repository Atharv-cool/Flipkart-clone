import React, { useContext } from "react";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import CardGiftcardSharpIcon from "@mui/icons-material/CardGiftcardSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import "./Logint.css";
import { Link } from "react-router-dom";
import { productData } from "./App";
const Logint = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(productData);
  return (
    <div className="logint">
      <div className="logint__i">
        <h2>New customer</h2>
        <Link to="/login">
          <h2>
            {isLoggedIn ? (
              <div onClick={() => setIsLoggedIn(false)}>Logout</div>
            ) : (
              <div>Login</div>
            )}
          </h2>
        </Link>
      </div>
      <hr />
      <div className="logint__in">
        <AccountCircleSharpIcon />
        <p>My Profile</p>
      </div>
      <hr />
      <div className="logint__in">
        <img
          width="20"
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
          alt="Flipkart plus "
        />{" "}
        <p>Flipkart plus</p>
      </div>
      <hr />
      <div className="logint__in">
        <StoreSharpIcon />
        <p>Orders</p>
      </div>
      <div className="logint__in">
        <FavoriteSharpIcon />
        <p>Wishlist</p>
      </div>
      <div className="logint__in">
        <ConfirmationNumberIcon />
        <p>Rewards</p>
      </div>
      <div className="logint__in">
        <CardGiftcardSharpIcon />
        <p>Gift Cards</p>
      </div>
    </div>
  );
};
export default Logint;
