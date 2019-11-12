import React, { Component } from "react";
import GoogleAuth from "./GoogleAuth";
import { connect } from "react-redux";
import "./Login.css";

class Login extends Component {
  render() {
    let show = {};

    if (this.props.googleIsSignedIn === true) {
      show = { display: "none" };
    } else {
      show = {};
    }

    return (
      <div className="main">
        <div className="form" style={show}>
          <span className="title">USER AREA</span>
          <div className="info-input">
            <span>USERNAME</span>
            <br />
            <input className="input-box" type="text"></input>
          </div>
          <div className="info-input">
            <span>PASSWORD</span>
            <br />
            <input className="input-box" type="password"></input>
          </div>
          <button className="btn-submit">LOGIN</button>
          <div className="divisor">
            <span>OR</span>
          </div>
        </div>
        <GoogleAuth />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    googleIsSignedIn: state.googleOauthReducer.isSignedIn,
    googleUserId: state.googleOauthReducer.userId
  };
};

export default connect(
  mapStateToProps,
  {}
)(Login);
