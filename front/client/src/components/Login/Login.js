import React, { Component } from "react";
import GoogleAuth from "./GoogleAuth";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="main">
        <GoogleAuth />
      </div>
    );
  }
}

export default Login;
