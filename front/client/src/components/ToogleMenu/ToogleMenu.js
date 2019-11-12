import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./ToogleMenu.css";
import { connect } from "react-redux";
import { fetchSubjects, switchToogleMenu } from "../../actions";

const ToogleMenu = props => {
  const close = () => {
    props.switchToogleMenu();
  };

  const renderLoginButton = () => {
    if (props.googleIsSignedIn === true) {
      return (
        <div className="tooglemenu-login">
          <Link to="/login" onClick={() => close()}>
            LOGOUT
          </Link>
        </div>
      );
    } else {
      return (
        <Link to="/login">
          <div className="tooglemenu-login" onClick={() => close()}>
            LOGIN
          </div>
        </Link>
      );
    }
  };

  if (props.toogleMenuStatus) {
    return (
      <div>
        <div className="tooglemenu-items">
          <ul>
            {props.subjects.map(subject => {
              return (
                <Link to={`/subject/${subject.name}`} key={subject.name}>
                  <li>
                    <span onClick={() => close()}>{subject.name}</span>
                  </li>
                </Link>
              );
            })}
            <li>{renderLoginButton()}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const mapStateToProps = state => {
  return {
    subjects: state.subjectsReducer,
    toogleMenuStatus: state.switchToogleMenuReducer,
    googleIsSignedIn: state.googleOauthReducer.isSignedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchSubjects, switchToogleMenu }
  )(ToogleMenu)
);
