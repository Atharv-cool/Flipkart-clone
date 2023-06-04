import React from "react";
import "./Home.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carsoule from "./Carsoule";
import Items from "./items";
import Product from "./Product";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <Items />
      <Carsoule />
      <Product />
      <Product1 />
      <Product2 />
      <Footer />
    </div>
  );
}

export default Home;
