import React from "react";

function Jupi() {
  return (
    <div>
      <div
        style={{
          margin: 30,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "250px",
          width: "600px",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "250px",
            width: "600px",
            backgroundColor: "black",
          }}
        >
          <img
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "50%",
              float: "left",
              border: "1px solid white",
            }}
            src="./planets/Jupiter.webp"
            alt="Jupiter"
          />
          <div
            style={{
              marginLeft: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <span
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontSize: "26px",
                textAlign: "justify",

                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              Hiking at Mount Olympus
            </span>
            <span
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontSize: "15px",
                textAlign: "justify",
                fontWeight: "300",
                width: "300px",
                marginTop: "10px",
                letterSpacing: "1px",
              }}
            >
              Did you know I am jupiter! Call me Zeus or the king! HahahaDid you
              know I am jupiter! Call me. Read More{" "}
            </span>{" "}
            <div
              style={{
                hover: "pointer",
                width: "170px",
                height: "50px",
                backgroundColor: "transparent",
                border: "3px solid white",
                borderColor: "white",
                borderRadius: "7px",
                marginTop: "10px",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                display: "flex",

                borderTopColor: "wheat",
              }}
            >
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Book Me?{" "}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jupi;
