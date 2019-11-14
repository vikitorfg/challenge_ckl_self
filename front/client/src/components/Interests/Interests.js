import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSubjects } from "../../actions";
import Radium, { Style } from "radium";
import "./interests.css";

class Interests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interests: []
    };
  }

  componentDidMount() {
    const interests = ["TECH", "POLITICS"];
    this.fetchInterests(interests);
  }

  fetchInterests(interests) {
    this.setState({ interests });
  }

  convertArrayToObject(array, key) {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item
      };
    }, initialValue);
  }

  renderSubjectList() {
    var style = {};
    if (this.props.subjects[0]) {
      style = this.props.subjects.map(subject => {
        delete subject.id;
        return {
          ...subject,
          ":hover": { backgroundColor: subject.color, color: "white" }
        };
      });
      style = this.convertArrayToObject(style, "name");
    }

    return this.props.subjects.map(subject => {
      return (
        <div
          key={subject.name}
          className="choice"
          style={[style[subject.name]]}
        >
          <span>{subject.name}</span>
        </div>
      );
    });
  }

  render() {
    console.log(this.state);
    if (this.props.googleIsSignedIn === false) {
      return <div className="main">REDIRECT</div>;
    } else {
      // inherits much css from Login.css, should refactor that
      return (
        <div className="interests">
          <div className="title">
            WELCOME, <span className="username">USERNAME</span>
          </div>
          <div>
            <div className="subjects">
              <span className="info-input">MY INTERESTS</span>
            </div>
            <div className="subjects-choice">{this.renderSubjectList()}</div>
          </div>
          <button className="btn-submit save">SAVE</button>
          <div className="info-save">
            <span>BACK TO HOME</span>
          </div>
        </div>
      );
    }
  }
}

Interests = Radium(Interests);

const mapStateToProps = state => {
  return {
    subjects: state.subjectsReducer,
    googleIsSignedIn: state.googleOauthReducer.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchSubjects }
)(Interests);
