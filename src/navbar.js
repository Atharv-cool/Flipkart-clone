import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Moret from "./Moret";
import Logint from "./Logint";
import "tippy.js/themes/light.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__logo">
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
      </div>
      <div className="navbar__search">
        <input placeholder="Search for products,brands and more" type="text" />
        <SearchIcon />
      </div>
      <div className="navbar__login">
        <Tippy
          theme="light"
          content={<Logint></Logint>}
          interactive="true"
          offset={[5, 18]}
        >
          <button>User</button>
        </Tippy>
      </div>

      <div className="navbar__seller">
        <span>Become a seller</span>
      </div>

      <div className="navbar__more">
        <Tippy
          theme="light"
          content={<Moret></Moret>}
          interactive="true"
          offset={[5, 18]}
        >
          <span>More</span>
        </Tippy>
        <ExpandMoreIcon />
      </div>

      <Link to="/cart">
        <div className="navbar__cart">
          <ShoppingBasketIcon />
          <p>Cart</p>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
