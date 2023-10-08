import React from "react";
import "./Header.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";

function Header({ onBackClick }) {
  return (
    <div className="header">
      <Link
        to="/universe"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <div className="arrow">←</div>
      </Link>
    </div>
  );
}

export default Header;
