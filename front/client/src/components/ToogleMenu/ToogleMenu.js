import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./ToogleMenu.css";
import { connect } from "react-redux";
import { switchToogleMenu } from "../../actions";
import LoginLogic from "../LoginLogic/LoginLogic";

const ToogleMenu = props => {
  const close = () => {
    props.switchToogleMenu();
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
            <li onClick={() => close()}>
              <LoginLogic classes="tooglemenu-login" />
            </li>
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
    toogleMenuStatus: state.switchToogleMenuReducer
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { switchToogleMenu }
  )(ToogleMenu)
);
