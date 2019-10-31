import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./Navbar.css";
import logo from "../../static/logo.png";
import menu from "../../static/menu.png";
import { connect } from "react-redux";
import { fetchArticles } from "../../actions";
import { fetchSubjects } from "../../actions";
import { switchToogleMenu } from "../../actions";

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
                <div className="navbar-login">LOGIN</div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return { subjects: state.subjectsReducer, articles: state.articlesReducer };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchSubjects, fetchArticles, switchToogleMenu }
  )(Navbar)
);
