import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../static/logo.png";
import menu from "../../static/menu.png";
import { connect } from "react-redux";
// import { fetchArticles } from "../../actions";
import { fetchSubjects } from "../../actions";

export class Navbar extends Component {
  componentDidMount() {
    this.props.fetchSubjects();
  }
  render() {
    console.log(this.props.subjects.subjectsReducer);
    return (
      <header className="navbar">
        <nav className="navbar-nav">
          <img className="navbar-menu" src={menu} alt="menu" />
          <img className="navbar-logo" src={logo} alt="logo" />
          <div className="navbar-items">
            <ul>
              {this.props.subjects.subjectsReducer.map(subject => {
                return (
                  <li key={subject.name}>
                    <span>{subject.name}</span>
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
  return { subjects: state };
};

export default connect(
  mapStateToProps,
  { fetchSubjects }
)(Navbar);
