import React from "react";
import "./home.css";
import { homeData } from "../../dummyData";
import Home from "./Home";

const Homes = () => {
  return (
    <>
      <section className="home">
        {/* Pass static homeData directly as props */}
        <Home items={homeData} />
      </section>
      {/* Ensure the className is correctly spelled */}
      <div className="margin"></div>
    </>
  );
};

export default Homes;
