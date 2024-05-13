import React from "react";
import Slider from "react-slick";
import sl4 from "../Assets/sl4.jpg"
import sl5 from "../Assets/sl5.jpg"
import sl6 from "../Assets/sl6.jpg"
import sl7 from "../Assets/sl7.jpg"
import sl8 from "../Assets/sl8.jpg"
import sl9 from "../Assets/sl9.jpg"


function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
       
        <div className="imghs">
        <img src={sl5} alt="c" className="imgsls"/>
        <h1 className="himgsls">Cooking</h1>

        </div> <div className="imghs">
        <img src={sl4} alt="c" className="imgsls"/>
        <h1 className="himgsls">Serveces</h1>
        </div>
        <div className="imghs">
        <img src={sl6} alt="c" className="imgsls"/>
        <h1 className="himgsls">Cooking</h1>

        </div><div className="imghs">
        <img src={sl9} alt="c" className="imgsls"/>
        <h1 className="himgsls">Contacts</h1>

        </div>
        <div className="imghs">
        <img src={sl7} alt="c" className="imgsls"/>
        <h1 className="himgsls">Cooking</h1>

        </div> 
        <div className="imghs">
        <img src={sl8} alt="c" className="imgsls"/>
        <h1 className="himgsls">Lunch</h1>

        </div>
       
        
      </Slider>
    </div>
  );
}

export default AutoPlay;
