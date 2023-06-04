import React from "react";
import "./Product1.css";
import Card from "./Card";
function Product1() {
  return (
    <div className="product__electornics">
      <div className="product__best1">
        <div className="product__first">
          <h2 className="h2">Beauty,Food,Toys & More</h2>
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
          src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90"
          className="product__image1"
          alt="error"
        />
      </div>
      <Card
        url={
          "https://rukminim1.flixcart.com/image/200/200/krtjgcw0/headphone/1/i/y/au-mh601-maono-original-imag5j35zty3g6hq.jpeg?q=70"
        }
        name={"Studio headphones"}
        price={" ₹2500 "}
        dis={"Boat"}
      />
      <Card
        url={
          "https://rukminim1.flixcart.com/image/200/200/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=70"
        }
        name={"Food Spreads"}
        price={" ₹250"}
        dis={"Myfitness"}
      />
      <Card
        url={
          "https://rukminim1.flixcart.com/image/200/200/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=70"
        }
        name={"Pink teddy bear"}
        price={" ₹399"}
        dis={"Stuffed Toys,Plush Toys "}
      />
      <Card
        url={
          "https://rukminim1.flixcart.com/image/200/200/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=70"
        }
        name={"Dry Fruits"}
        price={" ₹500 "}
        dis={"Happilo"}
      />
    </div>
  );
}
export default Product1;
