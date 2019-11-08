import React, { Component } from "react";
import GoogleAuth from "./GoogleAuth";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="main">
        <span>USER AREA</span>
        <div className="username">
          <span>USERNAME</span>
          <br />
          <input type="text"></input>
        </div>
        <div className="password">
          <span>PASSWORD</span>
          <br />
          <input type="password"></input>
        </div>
        <GoogleAuth />
      </div>
    );
  }
}

export default Login;
