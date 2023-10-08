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
        padding: "48px",
        display: "block",
        //   overflowX: "hidden",
      }}
    >
        <div>

        </div>
      <SearchBar products={products} />
    </div>
  );
};

export default ActivitiesPage;
