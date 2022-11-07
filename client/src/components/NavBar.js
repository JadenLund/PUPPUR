import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function NavBar() {
  return (
    <nav className="nav">
      <header className="site-title">Dog.io</header>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/breeds">DOG BREEDS</Link>
      </li>
      <li>
        <Link to="/favorites">FAVORITES</Link>
      </li>
      <li>
        <Link to="/about">ABOUT</Link>
      </li>
      <li>
        <Link to="/comments">COMMENTS</Link>
      </li>
    </nav>
  );
}
export default NavBar;
