import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <a href="http://www.albanero.io" target="_blank">
        <img src="http://www.albanero.io/wp-content/uploads/2018/07/albanero-240-90-side-white.png" style={{width:"150px"}}></img>
      </a>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/chart">
          <li>Chart</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
