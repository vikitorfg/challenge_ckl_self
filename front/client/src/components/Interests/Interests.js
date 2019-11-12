import React, { Component } from "react";
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
          <span>MY INTERESTS</span>
        </div>
        <div className="">SAVE</div>
        <div>
          <span>BACK TO HOME</span>
        </div>
      </div>
    );
  }
}

export default Interests;
