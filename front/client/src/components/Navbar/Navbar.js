import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./Navbar.css";
import logo from "../../static/logo.png";
import menu from "../../static/menu.png";
import LoginLogic from "../LoginLogic/LoginLogic";
import {
  fetchArticles,
  fetchSubjects,
  switchToogleMenu,
  signOut
} from "../../actions";

export class Navbar extends Component {
  componentDidMount() {
    this.props.fetchSubjects();
  }

  renderLoginButton() {
    if (this.props.googleIsSignedIn === true) {
      return (
        <div className="navbar-login">
          <LoginLogic />
        </div>
      );
    } else {
      return (
        <Link to="/login">
          <div className="navbar-login">
            <LoginLogic signInText="LOGIN" />
          </div>
        </Link>
      );
    }
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
              <li>{this.renderLoginButton()}</li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    subjects: state.subjectsReducer,
    articles: state.articlesReducer,
    googleIsSignedIn: state.googleOauthReducer.isSignedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchSubjects, fetchArticles, switchToogleMenu, signOut }
  )(Navbar)
);
