import React, { useState } from "react";
import "./flip.css";
import "./FAQ.css";

import MyBook from "./flipbook";
import Activity from "../components/Activity";
import { useLocation } from "react-router";
const Planet = () => {
  const location = useLocation();
  const { planet } = location.state;
  console.log(planet);
  const url = new URL(window.location.href);

  const name = url.searchParams.get("name");
  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How do I install React?",
      answer:
        'You can install React using the "create-react-app" command or by adding it to an existing project using npm or yarn.',
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript used by React to describe what the UI should look like.",
    },
    // Add more questions and answers as needed
  ];
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
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
      <div
        className="textContaainer"
        style={{
          zIndex: 2,
          marginTop: "30vh",

          width: "100%",
          position: "relative",
          textAlign: "center",
          flex: 1,
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "60px",
            textShadow: "2px 2px 4px #333",
            fontFamily: "Poppins",
            fontWeight: "bold",
            // width: "50vw",
          }}
        >
          KING OF THE SOLAR SYSTEM.{" "}
        </span>
        <br />
        <span
          style={{
            textShadow: "2px 2px 4px #333",

            textAlign: "center",
            color: "white",
            fontSize: "100px",
            fontFamily: "Poppins",
            fontWeight: "1000",
          }}
        >
          {name}
        </span>
      </div>
      <div
        className="PlanetImageContainer"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "-400px",
          //   marginRight: "-300px",
          right: 0,
          left: 0,
        }}
      >
        <img
          src="../planets/Jupiter.png"
          className="PlanetImage"
          style={{
            height: "160vh",
            backgroundSize: "cover",
          }}
        />
      </div>
      <hr />
      <div
        style={{
          marginTop: "30vh",
          flex: 1,
          flexDirection: "row",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            verticalAlign: "center",
          }}
        >
          <span
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "25px",
              width: "200px",
              fontFamily: "Poppins",
              fontWeight: "100",
            }}
          >
            Check me out
          </span>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "red",
            zIndex: 2,
            marginRight: 200,
            flex: 9,
          }}
        >
          <MyBook />
        </div>
      </div>
      <div>
        <span
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "60px",
            textShadow: "2px 2px 4px #333",
            fontFamily: "Poppins",
            fontWeight: "bold",
            // width: "50vw",
          }}
        >
          Things to Explore.{" "}
        </span>
        <div style={{ marginTop: "50px" }}>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <div
              style={{
                flex: 0.5,
                // backgroundColor: "red",
              }}
            >
              {" "}
              <Activity />
            </div>
            <div
              style={{
                flex: 0.5,
                display: "flex",
                // backgroundColor: "blue",
              }}
            >
              {" "}
              <Activity />
            </div>
          </div>
        </div>
      </div>
      <div>
        return (
        <div className="faq-container">
          <h1 className="faq-header">Frequently Asked Questions</h1>
          <ul className="faq-list">
            {faqData.map((item, index) => (
              <li key={index}>
                <div
                  className={`faq-question ${
                    expandedIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleAnswer(index)}
                >
                  {item.question}
                </div>
                <div
                  className={`faq-answer ${
                    expandedIndex === index ? "active" : ""
                  }`}
                >
                  {item.answer}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>{" "}
    </div>
  );
};

export default Planet;
