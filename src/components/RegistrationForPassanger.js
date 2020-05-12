import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";

class RegistrationForPassanger extends Component {
  state = {
    usernameId: "",
    emailId: "",
    passwordId: "",
    confirmPasswordId: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Registration For passanger</h1>
        <div className="signup-form">
          <form onSubmit={this.handleSubmit} method="post">
            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account!</p>
            <hr />
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user"></i>
                </span>
                <input
                  id="usernameId"
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={this.handleChange}
                  placeholder="Username"
                  required="required"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i class="fa fa-paper-plane"></i>
                </span>
                <input
                  id="emailId"
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={this.handleChange}
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
                  id="passwordId"
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.handleChange}
                  placeholder="Password"
                  required="required"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock"></i>
                  <i className="fa fa-check"></i>
                </span>
                <input
                  id="passwordId"
                  type="password"
                  className="form-control"
                  name="confirm_password"
                  onChange={this.handleChange}
                  placeholder="Confirm Password"
                  required="required"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="checkbox-inline">
                <input type="checkbox" required="required" /> I accept the
                <Link to="/">Terms of Use</Link> &amp;
                <Link to="/">Privacy Policy</Link>
              </label>
            </div>
            <div class="form-group">
              <button type="submit" className="btn btn-primary btn-lg">
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

export default RegistrationForPassanger;
