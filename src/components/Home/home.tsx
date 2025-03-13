import React from "react";
import { NavLink } from "react-router";

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to trails!</h1>
      <p>This is a project I've created to share my Outdoor activities!</p>
      <p>This is a work in progress, and it's still in early stages.</p>
      <NavLink to="/menu" end>
        Lets get started!
      </NavLink>
    </div>
  );
};

export default Homepage;
