import React, { Component } from "react";
import { Link } from "react-router-dom";
import fire from "../config/Firebase";
import "./Registration.css";

class RegistrationForDriver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // username: "",
      email: "",
      password: "",
      // confirmPassword: "",
    };
  }

  handleChange = (e) => {};

  render() {
    return (
      <div>
        <h1>Registration For driver.</h1>

        <div className="signup-form">
          <form onSubmit={this.handleSubmit} method="post">
            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account!</p>
            <hr />
            {/* <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user"></i>
                </span>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Username"
                  required="required"
                />
              </div>
            </div> */}
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-paper-plane"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  onChange={this.handleChange}
                  name="email"
                  placeholder="Email Address"
                  required="required"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.handleChange}
                  placeholder="Password"
                  required="required"
                />
              </div>
            </div>
            {/* <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock"></i>
                  <i className="fa fa-check"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  onChange={this.handleChange}
                  placeholder="Confirm Password"
                  required="required"
                />
              </div>
            </div> */}
            <div className="form-group">
              <label className="checkbox-inline">
                <input type="checkbox" required="required" /> I accept the
                <Link to="/">Terms of Use</Link> &amp;
                <Link to="/">Privacy Policy</Link>
              </label>
            </div>
            <div className="form-group">
              <button onClick={this.signup} className="btn btn-primary btn-lg">
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center">
            Already have an account?
            <Link to="/loginForDriver">Login here</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationForDriver;
