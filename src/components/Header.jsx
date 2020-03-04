import React from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
const Header = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div style={props}>
          <div style={headerStyle}>
            <h1>Em's</h1>
            <Link to="/">Home</Link> | <Link to="/location">Location</Link> |
            <Link to="/bio"> Bio</Link>
          </div>
        </div>
      )}
    </Spring>
  );
};

const headerStyle = {
  background: "lightblue",
  color: "white",
  padding: "1.5rem"
};

export default Header;
