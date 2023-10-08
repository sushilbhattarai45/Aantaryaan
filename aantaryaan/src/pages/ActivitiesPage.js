import React from "react";
import SearchBar from "../components/SearchBar";

const ActivitiesPage = () => {
  let products = [
    "apples",
    "bananas",
    "grapefruit",
    "kiwi",
    "avocados",
    "lettuce",
    "tomatoes",
    "cheese",
    "bread",
    "yogurt",
    "peas",
    "carrots",
    "broccoli",
    "beans",
    "pizza",
    "pasta",
    "rice",
    "cereal",
    "butter",
    "milk",
    "eggs",
    "onions",
    "garlic",
    "honey",
    "soup",
    "salt",
    "pepper",
    "oregano",
    "basil",
    "paprika",
  ];
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "black",
        padding: "32px",
        display: "block",
        //   overflowX: "hidden",
      }}
    >
      <div
        className="textContaainer"
        style={{
          marginTop: "20px",

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
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
        >
          What to do in Space?
        </span>
        <br />
        <span
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "32px",
            fontWeight: 400,
            fontFamily: "Space Grotesk",
          }}
        >
          Don’t worry we have curated several activities
        </span>
        <br />
        <span
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "32px",
            fontWeight: 800,
            fontFamily: "Space Grotesk",
          }}
        >
          Just For You
        </span>
      </div>
      <div style={{ marginTop: "36px" }}>
        <SearchBar products={products} />
      </div>
    </div>
  );
};

export default ActivitiesPage;
