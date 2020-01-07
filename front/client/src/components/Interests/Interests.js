import React, { Component } from "react";
import backend from "../../apis/backend";
import { connect } from "react-redux";
import Radium from "radium";
import { Redirect } from "react-router-dom";
import "./interests.css";

class Interests extends Component {
  state = {
    interests: []
  };

  async componentDidMount() {
    const response = await backend
      .get(`interests/`, {
        userId: this.props.userId
      })
      .then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );

    console.log(response);

    const interests = ["TECH", "POLITICS"];
    this.setState({ interests });
  }

  selectInterest(interest) {
    if (this.state.interests.includes(interest)) {
      const newInterest = this.state.interests.filter(
        arrayItem => arrayItem !== interest
      );
      this.setState({ interests: newInterest });
    } else {
      this.setState(prevState => ({
        interests: [...prevState.interests, interest]
      }));
    }
  }

  async onSave() {
    if (!this.props.userId) {
      return console.log("no user detected");
    }
    // console.log(this.state.interests);
    // const interests = this.state.interests.map(interest => {

    // })

    const response = await backend
      .post(`interests/`, {
        userId: this.props.userId,
        interests: [1, 2, 3]
      })
      .then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
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

        if (this.state.interests.includes(subject.name)) {
          return {
            name: subject.name,
            color: "white",
            backgroundColor: subject.color
          };
        }

        return {
          ...subject,
          backgroundColor: "white"
        };
      });
      style = this.convertArrayToObject(style, "name");
    }

    return this.props.subjects.map(subject => {
      return (
        <div
          key={subject.name}
          className="interest"
          style={[style[subject.name]]}
          onClick={() => {
            this.selectInterest(subject.name);
          }}
        >
          <span>{subject.name}</span>
        </div>
      );
    });
  }

  render() {
    if (this.props.googleIsSignedIn === false) {
      return <Redirect to="/login" />;
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
          <button className="btn-submit save" onClick={() => this.onSave()}>
            SAVE
          </button>
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
    googleIsSignedIn: state.googleOauthReducer.isSignedIn,
    userId: state.googleOauthReducer.userId
  };
};

export default connect(mapStateToProps, {})(Interests);
