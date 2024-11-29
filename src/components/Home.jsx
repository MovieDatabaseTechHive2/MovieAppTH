import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick carousel theme CSS
import HomeCard from "./HomeCard"; // Import HomeCard for displaying individual items

// Next Arrow for the carousel
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};

// Previous Arrow for the carousel
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-chevron-left"></i>
      </button>
    </div>
  );
};

const Home = ({ items }) => {

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    nextArrow: <SampleNextArrow />, 
    prevArrow: <SamplePrevArrow />, 
  };

  return (
    <div className="homeContainer">
      {/* Render Slider */}
      <Slider {...settings}>
        {items.map((item) => (
          <HomeCard key={item.id} item={item} /> 
        ))}
      </Slider>
    </div>
  );
};

export default Home;
