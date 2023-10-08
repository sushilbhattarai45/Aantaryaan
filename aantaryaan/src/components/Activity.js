import React from "react";

function Activity() {
  return (
    <div
      style={{
        alignContent: "center",
        flex: 1,
        verticalAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "40vw",
        borderRadius: "10px",
        backgroundColor: "#1f2937",
      }}
    >
      <a
        style={{
          borderWidth: 0,
        }}
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          style={{
            position: "relative",
            height: "300px",
            width: "250px",
            borderRadius: "100%",
          }}
          class="object-cover w-full rounded-t-lg   md:w-48 md:rounded-none md:rounded-l-lg"
          src="../planets/Jupiter.webp"
          alt=""
        />
        <div
          class="flex flex-col  p-4 leading-normal"
          style={{
            float: "left",
            marginLeft: "20px",
          }}
        >
          <h5
            style={{
              textAlign: "left",
              fontFamily: "Poppins",
            }}
            class="mb-2 text-xl font-bold  dark:text-white"
          >
            Hiking at Mount Olympiad{" "}
          </h5>
          <p
            style={{
              width: "300px",
              textAlign: "left",
              color: "white",
              fontFamily: "Poppins",
            }}
            class="mb-3 font-normal  "
          >
            Did you know I am jupiter! Call me Zeus or the king! HahahaDid you
            know I am jupiter! Call me!! HahahaDid you know I am jupiter! Call
          </p>
          <p
            style={{
              textAlign: "left",
              color: "#6FA203",
              textDecoration: "underline",
              fontFamily: "Poppins",
            }}
            class="mb-3 font-normal text-gray-700 dark:text-gray-400"
          >
            Read More
          </p>
          <div
            style={{
              hover: "pointer",
              width: "180px",
              height: "50px",
              backgroundColor: "transparent",
              border: "4px solid white",
              borderColor: "white",
              borderRadius: "10px",
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
                fontSize: "20px",
                color: "white",
                textAlign: "center",
              }}
            >
              Book me?{" "}
            </p>{" "}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Activity;
