import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PlanetSlider.css";

const Planets = [
  {
    name: "Mercury",
    img: "https://www.pngplay.com/wp-content/uploads/13/Mercury-PNG-Photos.png",
  },

  {
    name: "Venus",
    img: "https://p7.hiclipart.com/preview/682/838/406/earth-venus-planet-neptune-space-science-planet-mars.jpg",
  },
  {
    name: "Earth",
    img: "https://clipart-library.com/image_gallery2/Earth-Free-Download-PNG.png",
  },
  {
    name: "Mars",
    img: "https://img.freepik.com/premium-photo/mars-planet-isolated-white-background_374761-2815.jpg",
  },
  {
    name: "Jupiter",
    img: "https://cdn.pixabay.com/photo/2015/09/16/11/15/jupiter-942558_960_720.jpg",
  },
];

const PlanetSlider = () => {
  const [imgclick, setImgclick] = useState();

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div
      className="planet-slider-container"
      style={{
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <div>
        <Slider
          {...settings}
          style={{ marginTop: "100px", scrollSnapType: "x mandatory" }}
        >
          {Planets.map((planet, index) => (
            <div
              key={index}
              className="planet-slide"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
              }}
            >
              <img
                style={{
                  display: "flex",
                  alignSelf: "center",
                  height: "200px",
                  width: "200px",
                  borderRadius: "50%",
                }}
                onClick={() => setImgclick(planet.name)}
                src={planet.img}
                alt={`Planet ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        <p
          style={{
            color: "white",
            fontSize: "20px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {imgclick}
        </p>
      </div>
    </div>
  );
};

const CustomPrevArrow = (props) => (
  <div
    className="custom-arrow custom-prev"
    style={{
      backgroundColor: "black",
      color: "white",
      borderRadius: "50%",
      borderWidth: "1px",
      border: "6px solid white",
      zIndex: 1,
      borderColor: "white",
    }}
    onClick={props.onClick}
  >
    &lt;
  </div>
);

const CustomNextArrow = (props) => (
  <div
    className="custom-arrow custom-next"
    style={{
      backgroundColor: "black",
      color: "white",
      borderRadius: "50%",
      borderWidth: "1px",
      border: "6px solid white",

      borderColor: "white",
    }}
    onClick={props.onClick}
  >
    &gt;
  </div>
);

export default PlanetSlider;
