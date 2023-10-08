import React, { useState, useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PlanetSlider.css";
import { AppContext } from "../context/ContextProvider";

// const Planets = [
//   {
//     name: "Mercury",
//     img: "../planets/Mercury.png",
//   },
//   {
//     name: "Venus",
//     img: "../planets/Venus.png",
//   },
//   {
//     name: "Earth",
//     img: "../planets/earth.png",
//   },
//   {
//     name: "Mars",
//     img: "../planets/mars.png",
//   },
//   {
//     name: "Jupiter",
//     img: "../planets/Jupiter.png",
//   },
//   {
//     name: "Saturn",
//     img: "../planets/Saturn.png",
//   },
//   {
//     name: "Uranus",
//     img: "../planets/Uranus.png",
//   },
//   {
//     name: "Neptune",
//     img: "../planets/Neptune.png",
//   },
//   {
//     name: "IO",
//     img: "../planets/Io.png",
//   },
//   {
//     name: "Europa",
//     img: "../planets/Europa.png",
//   },
//   {
//     name: "Ganymede",
//     img: "../planets/Ganymede.png",
//   },
//   {
//     name: "Phobos",
//     img: "../planets/phobos.webp",
//   },
// ];

const PlanetSlider = () => {
  const { planets } = useContext(AppContext);
  const [imgclick, setImgclick] = useState(planets[0]);

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
        overflow: "hidden",
        outline: "none",
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <div>
        <Slider
          {...settings}
          style={{
            outline: "none",
            paddingTop: 50,
            scrollSnapType: "x mandatory",
          }}
        >
          {planets.map((planet, index) => (
            <div
              key={index}
              className="planet-slide"
              style={{
                display: "flex",
                justifyContent: "center",
                borderColor: "black",
                border: "1px solid black",
                alignItems: "center",
                outline: "none",
                alignContent: "center",
                alignSelf: "center",
              }}
            >
              <img
                style={{
                  display: "flex",
                  alignSelf: "center",
                  cursor: "pointer",
                  outline: "none",
                  height: "250px",
                  width: "250px",
                  borderRadius: "50%",
                }}
                onClick={() =>
                  setImgclick({
                    name: planet.name,
                    img: planet.image,
                    tagLine: planet.tagline,
                    description: planet.description,
                    faqs: planet.faqs,
                  })
                }
                src={planet.image}
                alt={` ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        {/* <p
          style={{
            color: "white",
            fontSize: "20px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {imgclick}
        </p> */}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: 20,
          flex: 1,
          flexDirection: "row",
          width: 200,

          height: 200,
        }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          {" "}
          <span
            style={{
              color: "white",
              fontFamily: "Space Grotesk",
              fontSize: "48px",
              fontWeight: "900",
              float: "left",
              left: 10,
            }}
          >
            {imgclick.name}
          </span>
        </div>
        <div style={{ display: "flex", flex: 1, zIndex: 2 }}>
          <br />{" "}
          <span
            style={{
              color: "white",
              fontFamily: "Space Grotesk",
              fontSize: "20px",
              float: "left",
              left: 10,
            }}
          >
            {console.log(imgclick.data)}
            {imgclick.tagLine}
          </span>
        </div>
        <Link
          to={`/planet`}
          state={{ planet: { ...imgclick } }}
          style={{
            textDecoration: "none",
          }}
        >
          <div style={{ display: "flex", flex: 1 }}>
            <br />
            <p
              style={{
                color: "yellow",
                fontFamily: "Space Grotesk",
                fontSize: "20px",
                float: "left",
                cursor: "pointer",
                zIndex: 10,
                marginTop: 10,
                textDecoration: "underline",
                left: 10,
              }}
            >
              Take a in a Ride
            </p>
          </div>
        </Link>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 70,
          right: 10,
          zIndex: 1,
          height: 100,
          backdroundColor: "red",
          width: 100,
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 60,
            width: 200,
            height: 50,
            borderRadius: 50,
            right: 10,
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            borderColor: "white",
            borderWidth: 1,
            border: "1px solid white",
            backgroundColor: "black",
          }}
        >
          <p
            style={{
              color: "white",
              fontFamily: "Space Grotesk",
              fontSize: "20px",
              float: "left",

              textAlign: "center",
            }}
          >
            Activities
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: 200,
            height: 50,
            borderRadius: 50,
            right: 10,
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            borderColor: "white",
            borderWidth: 1,
            border: "1px solid white",
            backgroundColor: "black",
          }}
        >
          <p
            style={{
              color: "white",
              fontFamily: "Space Grotesk",
              fontSize: "20px",
              float: "left",

              textAlign: "center",
            }}
          >
            Tour
          </p>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: -250,
          alignSelf: "center",
          width: "100vw",
        }}
      >
        <img
          src={imgclick.img}
          style={{
            overflow: "hidden",
            height: "500px",
            width: "500px",
            borderRadius: "50%",
          }}
        />
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
