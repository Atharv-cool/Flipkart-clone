import React, { useContext } from "react";
import "./Product.css";
import Card from "./Card";
import { productData } from "./App";
import { Link } from "react-router-dom";
function Product() {
  const { setApiState } = useContext(productData);
  return (
    <div className="product__main">
      <div className="product__cover">
        <div className="product__electornics">
          <div className="product__best1">
            <div className="product__first">
              <h2 className="h2">Best of Electronics</h2>
              <div
                className="product__a"
                onClick={() => setApiState("/electronics")}
              >
                <Link to="/electronics">
                  <a
                    className="product__button"
                    href="https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&wid=3.dealCard.OMU_3&otracker=hp_omu_Best%2Bof%2BElectronics_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_wc_view-all_3"
                  >
                    View All
                  </a>
                </Link>
              </div>
            </div>
            <img
              // src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
              className="product__image1"
              alt="error"
            />
          </div>

          <div className="product__main2">
            <div className="product__cover2">
              <div className="product__per">
                <Card
                  url={
                    "https://rukminim1.flixcart.com/image/200/200/kyag87k0/computer/7/r/u/raider-ge66-12ugs-gaming-laptop-msi-original-imagakb9zw7gqzcm.jpeg?q=70"
                  }
                  name={"12th Gen Laptop"}
                  price={" ₹47,990"}
                  dis={"High performance Laptops"}
                />
              </div>
              <Card
                url={
                  "https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70"
                }
                name={"Top Mirrorless Cameras"}
                price={"₹35999"}
                dis={"Nikon"}
              />
              <Card
                url={
                  "https://rukminim1.flixcart.com/image/200/200/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=70"
                }
                name={"Monitors"}
                price={" ₹6599 "}
                dis={" acer "}
              />
              <Card
                url={
                  "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"
                }
                name={"Printer"}
                price={" ₹3999 "}
                dis={"HP"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
