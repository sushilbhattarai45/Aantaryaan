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
        backgroundColor: "light black",
        alignContent: "center",
        flex: 1,

        verticalAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <center>
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
            <img className="passport" src="https://i.imgur.com/mzp2Uub.jpg" />
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
      </center>
    </div>
  );
}
