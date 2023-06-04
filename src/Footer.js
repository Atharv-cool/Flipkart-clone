import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="flipkart-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <h4>About</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Flipkart Stories</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Flipkart Wholesale</a>
                </li>
                <li>
                  <a href="#">Company Information</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <h4>Help</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Payments</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Cancellation &amp; Returns</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Report Infringement</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <h4>Customer Policy</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Return Policy</a>
                </li>
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Grievance Redressal</a>
                </li>
                <li>
                  <a href="#">EPR Compliance</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <h4>Social</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">&copy; 2023 Flipkart.com</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
