import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./Navbar.css";
import logo from "../../static/logo.png";
import menu from "../../static/menu.png";
import LoginLogic from "../LoginLogic/LoginLogic";
import { fetchSubjects, switchToogleMenu } from "../../actions";

export class Navbar extends Component {
  componentDidMount() {
    this.props.fetchSubjects();
  }

  render() {
    return (
      <header className="navbar">
        <nav className="navbar-nav">
          <img
            className="navbar-menu"
            src={menu}
            alt="menu"
            onClick={() => this.props.switchToogleMenu()}
          />
          <Link to="/">
            <img className="navbar-logo" src={logo} alt="logo" />
          </Link>

          <div className="navbar-items">
            <ul>
              {this.props.subjects.map(subject => {
                return (
                  <Link to={`/subject/${subject.name}`} key={subject.name}>
                    <li>
                      <span>{subject.name}</span>
                    </li>
                  </Link>
                );
              })}
              <li>
                <LoginLogic classes="navbar-login" />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    subjects: state.subjectsReducer
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchSubjects, switchToogleMenu }
  )(Navbar)
);
