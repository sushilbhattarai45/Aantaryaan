// src/components/About.js
import React from "react";
import bg from "../bg.jpeg";
import nasa from "../nasa.png";
import Logo from "../yatru.png";
function Dashboard() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            opacity: 0.3,
            width: "100vw",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            zIndex: 1,

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <img
            src={nasa}
            alt="nasa"
            style={{
              zIndex: 1,
              width: "200px",
              position: "absolute",
              right: 30,
              top: 30,
            }}
          />
          <div style={{ marginTop: 50 }}>
            {" "}
            <img src={Logo} alt="Logo" />
          </div>
          <br />
          <div
            style={{
              marginTop: -50,
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "48px",
                fontFamily: "Space Grotesk",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              We are taking you to a Mesmerizing journey.{" "}
            </p>
          </div>
          <div
            style={{
              marginTop: -70,
            }}
          >
            {" "}
            <p
              style={{
                color: "white",
                fontFamily: "Space Grotesk",
                fontSize: "40px",
                alignSelf: "center",
                width: "550px",
                textAlign: "center",
              }}
            >
              A journey in space beyond time.
            </p>
          </div>

          <div
            style={{
              hover: "pointer",
              width: "200px",
              marginTop: "50px",
              height: "60px",
              backgroundColor: "transparent",
              border: "6px solid white",
              borderColor: "white",
              borderRadius: "10px",
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
              alignItems: "center",
              display: "flex",

              borderTopColor: "wheat",
            }}
          >
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                color: "white",
                textAlign: "center",
              }}
            >
              Ready To Leap?{" "}
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
