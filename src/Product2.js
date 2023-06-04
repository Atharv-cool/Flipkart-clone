import React from "react";
import "./Product2.css";
import Card from "./Card";
function Product2() {
  return (
    <div className="product__electornics">
      <div className="product__best1">
        <div className="product__first">
          <h2 className="h2">Fashion Top Deals</h2>
          <div className="product__a">
            <a
              className="product__button"
              href="https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&wid=3.dealCard.OMU_3&otracker=hp_omu_Best%2Bof%2BElectronics_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_wc_view-all_3"
            >
              View All
            </a>
          </div>
        </div>
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/ae3cf1d27ef0eabc.jpg?q=90"
          className="product__image1"
          alt="error"
        />
      </div>
      <Card
        url={
          "https://rukminim1.flixcart.com/image/200/200/kz8qsnk0/lehenga-choli/m/k/z/free-3-4-sleeve-puspar-lh-001-divastri-original-imagbarzwpevcr5e.jpeg?q=70"
        }
        name={"Lehenga Choli "}
        price={"₹1999"}
        dis={"Buy 2,Get 5% Off"}
      />
      <Card
        url={
          "https://rukminim1.flixcart.com/image/200/200/l3khsi80/shirt/b/n/4/m-ld-hlf-red-cargo-lumad-original-imagenqjfgkujsvv.jpeg?q=70"
        }
        name={"Red Shirt"}
        price={"₹550 "}
        dis={"Lowest Ever Prices"}
      />
      <Card
        url={
          "https://rukminim1.flixcart.com/image/200/200/joq2qa80/jacket/v/h/8/m-fmjk0610-flying-machine-original-imafb4944xejmphz.jpeg?q=70"
        }
        name={"Black Jacket"}
        price={" ₹999"}
        dis={"Beat the Chill"}
      />
      <Card
        url={
          "https://rukminim1.flixcart.com/image/200/200/kn4xhu80/bra/x/c/3/lightly-padded-32e-no-regular-regular-br2213p08-clovia-original-imagfvnj3gmgqbxf.jpeg?q=70"
        }
        name={"Bra,Top"}
        price={"₹99"}
        dis={"Sassafras"}
      />
    </div>
  );
}

export default Product2;
