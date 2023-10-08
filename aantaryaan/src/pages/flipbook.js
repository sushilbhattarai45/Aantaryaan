import HTMLFlipBook from "react-pageflip";
import React from "react";
import "./flip.css";
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      /* ref required */
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

export default function MyBook() {
  return (
    <div
      style={{
        backgroundColor: "black",
        alignContent: "center",
        flex: 1,
        verticalAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflowX: "hidden",
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          style={{
            height: "90%",
            zIndex: -1,
            width: "45%",
            top: 20,
            overflow: "hidden",
            marginRight: "-700px",
            backgroundColor: "#1E1E1E",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          src="../planets/Jupiter.webp"
        />
      </div>
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          top: 100,
          left: 10,
          overflowX: "hidden",

          display: "flex",
          width: "100vw",
          flex: 1,
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "50px",
            float: "left",
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
        >
          KING OF THE SOLAR SYSTEM.{" "}
        </span>{" "}
        <br />
      </div>
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          top: 170,
          left: 10,
          display: "flex",
          width: "100vw",
          flex: 1,
        }}
      >
        <span
          style={{
            float: "left",
            color: "white",
            fontSize: "100px",
            fontFamily: "Poppins",
            fontWeight: "1000",
          }}
        >
          JUPITER{" "}
        </span>{" "}
      </div>
      <center>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            overflowX: "hidden",

            backgroundColor: "black",
          }}
        >
          <HTMLFlipBook
            alignContent="center"
            width={500}
            style={{
              paddingTop: 30,
              alignContent: "center",
              flex: 1,
              verticalAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            height={600}
            showCover={true}
          >
            <div id="1" ref="1" className="demoPage">
              <img className="passport" src="./Comic/jupiterimg.png" />
            </div>
            <div className="demoPage">
              <img
                className="img"
                src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </div>
            <div className="demoPage">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  backgroundColor: "red",
                }}
              >
                <p>Heello</p>
              </div>{" "}
            </div>
            <div className="demoPage">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  backgroundColor: "red",
                }}
              >
                <img
                  className="img"
                  src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />{" "}
              </div>{" "}
            </div>
            <div id="1" ref="1" className="demoPage">
              <img className="passport" src="https://i.imgur.com/mzp2Uub.jpg" />
            </div>
          </HTMLFlipBook>
        </div>
      </center>
    </div>
  );
}
