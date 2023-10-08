import HTMLFlipBook from "react-pageflip";
import React, { useState, useEffect } from "react";
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

export default function MyBook({ data, name }) {
  const [img, setImg] = useState([]);
  useEffect(() => {
    sortData();
    img.map((item, index) => {
      console.log(item);
    });
  }, []);
  const myData = data;
  const sortData = () => {
    data.map((item, index) => {
      if (item.name === name) {
        setImg(item.image);
      }
    });
  };
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
      <center>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            overflowX: "hidden",
            marginLeft: -60,
            marginTop: 10,
            backgroundColor: "dark black",
          }}
        >
          {" "}
          <HTMLFlipBook
            alignContent="center"
            width={500}
            style={{
              alignContent: "center",
              flex: 1,
              top: 15,
              backgroundColor: "white",
              verticalAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            height={600}
            showCover={true}
          >
            {img?.map((item, i) => {
              console.log("item" + item);

              return (
                <div className="demoPage">
                  <img className="passport" src={item} />
                </div>
              );
              i++;
            })}
          </HTMLFlipBook>
        </div>
      </center>
    </div>
  );
}
