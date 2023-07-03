import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <ul className="header">
          <li>
            <Link to="/bmi">Home</Link>
          </li>
          {/* <li>
            <Link to="/save">Save</Link>
          </li> */}
          <ul>
          <li>
            <Link to="/underdiet-list">Under</Link>
          </li>
          <li>
            <Link to="/diet-list">Normal</Link>
          </li>
          <li>
            <Link to="/overdiet-list">Over</Link>
          </li>
          </ul>
        </ul>
      </nav>
    );
  }
}

export default Header;