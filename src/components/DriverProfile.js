import React, { Component } from "react";
import fire from "../config/Firebase";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <button className=" btn btn-dark" onClick={this.logout}>
          Logout
        </button>
        <h1>My Driver profile</h1>
      </div>
    );
  }
}

export default Profile;
