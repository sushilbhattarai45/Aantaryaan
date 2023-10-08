import React from "react";
import "./flip.css";
const Planet = () => {
  return (
    <div
      style={{
        // width: "100%",
        minHeight: "200vh",
        position: "relative",
        backgroundColor: "black",
        padding: "48px",
        display: "block",
        overflowX: "hidden",
        // overflowY: "auto",
      }}
    >
      <p className="textContaainer" style={{ zIndex: 2, position: "relative" }}>
        <span
          style={{
            textAlign: "left",
            color: "white",
            fontSize: "80px",
            fontFamily: "Poppins",
            fontWeight: "bold",
            float: "left",
            // width: "50vw",
          }}
        >
          KING OF THE SOLAR SYSTEM.{" "}
        </span>
        <br />
        <span
          style={{
            float: "left",
            color: "white",
            fontSize: "100px",
            fontFamily: "Poppins",
            fontWeight: "1000",
          }}
        >
          JUPITER
        </span>
      </p>
      <div
        className="PlanetImageContainer"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "-100px",
          //   marginRight: "-300px",
          right: 0,
          left: 0,
        }}
      >
        <img
          src="../planets/Jupiter.webp"
          className="PlanetImage"
          style={{
            height: "160vh",
            backgroundColor: "#1E1E1E",
            backgroundSize: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Planet;
