import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";
import { productData } from "./App";
const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(productData);
  const navigate = useNavigate();

  const handleChange = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:9000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uname: email, pass: password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("user found");
      setIsLoggedIn(true);
      navigate("/");
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image-container">
          <Link to="/">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
              alt="Login"
              className="login-image"
            />
          </Link>
        </div>
        <form onSubmit={handleChange} className="login-form-container">
          <h2 className="login-form-heading">Login</h2>
          <label htmlFor="email" className="login-form-label">
            Email
          </label>
          <input
            name="email"
            id="email"
            className="login-form-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="password" className="login-form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="login-form-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit" className="login-form-button">
            Login
          </button>
          <Link to="/newaccount" className="login-form-link">
            New to Flipkart? Create an account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
