import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function NavBar() {
  return (
    <nav class="navbar myNavBar">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img
            src="/images/breakingbad_title_png.png"
            alt="Breaking Bad"
            width="167"
            height="63"
          />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
