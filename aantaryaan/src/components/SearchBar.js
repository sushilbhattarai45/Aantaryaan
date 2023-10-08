import React from "react";
import "./SearchBar.css";
import Activity from "../components/Activity";
import { act } from "react-dom/test-utils";

function SearchBar(props) {
  const [searchVal, setSearchVal] = React.useState("");

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  const handleClearBtn = () => {
    setSearchVal("");
  };

  const filteredProducts = props.products.filter((activity) => {
    return (
      activity.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      activity.planet.toLowerCase().includes(searchVal.toLowerCase())
    );
  });

  return (
    <div className="container">
      <div className="input-wrap">
        <i className="fas fa-search"></i>
        <label for="product-search" id="input-label">
          Product Search
        </label>
        <input
          onChange={handleInput}
          value={searchVal}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search Products"
        />
        <i onClick={handleClearBtn} className="fas fa-times"></i>
      </div>
      <div className="results-wrap">
        <ul>
          {filteredProducts.map((activity) => {
            return (
              <div style={{ marginLeft: -180 }}>
                <Activity data={activity} />;
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default SearchBar;
