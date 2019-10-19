import React, { Component } from "react";
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
          <img
            className="navbar-logo"
            src={logo}
            alt="logo"
            onClick={() => this.props.fetchArticles()}
          />
          <div className="navbar-items">
            <ul>
              {this.props.subjects.map(subject => {
                return (
                  <li key={subject.name}>
                    <span
                      onClick={() => this.props.fetchArticles(subject.name)}
                    >
                      {subject.name}
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

const mapStateToProps = state => {
  return { subjects: state.subjectsReducer, articles: state.articlesReducer };
};

export default connect(
  mapStateToProps,
  { fetchSubjects, fetchArticles, switchToogleMenu }
)(Navbar);
