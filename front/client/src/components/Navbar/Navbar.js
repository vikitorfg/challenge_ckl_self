import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../static/logo.png";
import menu from "../../static/menu.png";

export class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <nav className="navbar-nav">
          <img className="navbar-menu" src={menu} alt="menu" />
          <img className="navbar-logo" src={logo} alt="logo" />
          <div className="navbar-items">
            <ul>
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
