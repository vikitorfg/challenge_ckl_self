import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../static/logo.png";
import menu from "../../static/menu.png";

export class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <nav className="navbar-nav">
          <img
            className="navbar-menu"
            src={menu}
            onClick={this.props.toogleMenuClickHandler}
            alt=""
          />
          <img
            className="navbar-logo"
            src={logo}
            alt="logo"
            onClick={() => this.props.handleSubjectChange()}
          />
          <div className="navbar-items">
            <ul>
              {this.props.subjectList.map(subject => {
                return (
                  <li key={subject}>
                    <span
                      onClick={() => this.props.handleSubjectChange(subject)}
                    >
                      {subject}
                    </span>
                  </li>
                );
              })}
              <li>
                <div className="navbar-login">LOGIN</div>
              </li>
            </ul>
          </div>
          <div className="spacer"></div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
