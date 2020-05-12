import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../config/Firebase";

const Home = () => {
  return (
    <div>
      <h1>Welcome to our application. Please confirm who are you?</h1>
      <button className="btn-dark">
        <Link to="/loginForDriver">Driver</Link>
      </button>
      <button className="btn-dark">
        <Link to="/loginForPassanger">Passanger</Link>
      </button>
    </div>
  );
};

export default Home;
