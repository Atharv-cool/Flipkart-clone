import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Loginpage.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
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
        <form onSubmit={handleSubmit} className="login-form-container">
          <h2 className="login-form-heading">Sign up</h2>
          <label htmlFor="email" className="login-form-label">
            Email
          </label>
          <input
            type="email"
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
          <Link to="/login" className="login-form-link">
            Already a User.. Login!!!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
