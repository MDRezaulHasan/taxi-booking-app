import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

function LogInForPassanger() {
  return (
    <div>
      <h1>Log in for passanger</h1>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="email address" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p className="message">
              Not registered?
              <Link to="/registrationForDriver">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogInForPassanger;
