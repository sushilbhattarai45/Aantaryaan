import React, { useState, useEffect } from "react";
import "./flip.css";
import "./FAQ.css";
import { AppContext } from "../context/ContextProvider";
import { useContext } from "react";
import MyBook from "./flipbook";
import Activity from "../components/Activity";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Header from "../components/header";
const Planet = () => {
  useEffect(() => {
    const name = url.searchParams.get("name");

    console.log("Hello" + planet.name);
    // console.log(activities);
    setSelectedActivity([null]);
    activities.map((act, index) => {
      console.log(act.planet);
      if (act.planet === planet.name) {
        setSelectedActivity((prev) => [...prev, act]);
      }
    });

    console.log("data" + JSON.stringify(selectedActivity));
  }, []);
  const { activities } = useContext(AppContext);
  const [selectedActivity, setSelectedActivity] = useState([]);
  const location = useLocation();
  const { planet } = location.state;
  const url = new URL(window.location.href);
  const { planets } = useContext(AppContext);

  const faqData = [
    {
      question: "What is React ?",
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
      <Header />
      <Link to={"../Bookings"}>
        <div
          style={{
            position: "absolute",
            top: 20,
            zIndex: 999,
            width: 200,
            height: 50,
            borderRadius: 50,
            right: 20,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            borderColor: "white",
            borderWidth: 1,
            cursor: "pointer",

            border: "1px solid white",
            backgroundColor: "black",
          }}
        >
          <p
            style={{
              cursor: "pointer",

              color: "white",
              fontFamily: "Space Grotesk",
              fontSize: "20px",
              float: "left",

              textAlign: "center",
            }}
          >
            My Bookings
          </p>
        </div>
      </Link>
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
            fontSize: "40px",
            textShadow: "2px 2px 4px #333",
            fontFamily: "Poppins",
            fontWeight: "bold",
            // width: "50vw",
          }}
        >
          {planet.tagLine}{" "}
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
          {planet.name}
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
          src={planet.image}
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
        {/* <div
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
        </div> */}
        <div
          style={{
            display: "flex",
            backgroundColor: "red",
            zIndex: 2,

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
            width: "50vw",
          }}
        >
          Things to Explore.{" "}
        </span>
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            flexDirection: "column",
            marginLeft: -400,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {selectedActivity.map((activity, index) =>
            activity ? <Activity data={activity} /> : null
          )}
        </div>
      </div>
      <div>
        return (
        <div className="faq-container">
          <h1 className="faq-header">Frequently Asked Questions</h1>
          <ul className="faq-list">
            {planet.faqs.map((item, index) => (
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
