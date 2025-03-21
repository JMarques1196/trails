import React from "react";
import { NavLink } from "react-router";
import "./home.css";

const Homepage = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Welcome to trails!</h1>
        <p>This is a project I've created to share my Outdoor activities!</p>
        <p>This is a work in progress, and it's still in early stages.</p>
        <NavLink className="link" to="/menu" end>
          Get started!
        </NavLink>
      </div>
    </div>
  );
};

export default Homepage;
