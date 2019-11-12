import React, { Component } from "react";
import { connect } from "react-redux";
import "./interests.css";

class Interests extends Component {
  render() {
    // inherits much css from Login.css, should refactor that
    return (
      <div className="main">
        <div className="title">
          WELCOME, <span className="username">USERNAME</span>
        </div>
        <div className="subjects">
          <span className="info-input">MY INTERESTS</span>
        </div>
        <button className="btn-submit save">SAVE</button>
        <div className="info-save">
          <span>BACK TO HOME</span>
        </div>
      </div>
    );
  }
}

export default Interests;
