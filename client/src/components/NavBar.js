import React from "react";
import { Link } from "react-router-dom";
import { Button, Header } from "semantic-ui-react";
import "./css_files/NavBar.css";
function NavBar({ client }) {
  return (
    <nav className="nav">
      <Header as="h4">
        {/* <Link className="home-link" to="/">
          HOME
        </Link> */}
        <Link className="dog-breeds-link" to="/">
          DOG BREEDS
        </Link>
        <Link className="about-link" to="/about">
          ABOUT
        </Link>
        <Link className="about-link" to="/favorites">FAVORITES</Link>{" "}
      </Header>
    </nav>
  );
}
export default NavBar;
