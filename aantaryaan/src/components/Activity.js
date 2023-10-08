import React from "react";

function Jupi({ data }) {
  return (
    <div>
      <div
        style={{
          margin: 30,
          marginLeft: 200,
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
            width: "700px",
            backgroundColor: "black",
          }}
        >
          <img
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "50%",
              float: "left",
            }}
            src={data.image}
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
                fontSize: "20px",
                textAlign: "left",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              {data.name}
            </span>
            <span
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontSize: "15px",
                textAlign: "justify",
                fontWeight: "300",
                marginTop: "10px",
                width: 600,
                letterSpacing: "1px",
              }}
            >
              {data.description}{" "}
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
                marginTop: "20px",
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
