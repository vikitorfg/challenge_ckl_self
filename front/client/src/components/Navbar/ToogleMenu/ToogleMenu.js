import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./ToogleMenu.css";
import { connect } from "react-redux";
import { fetchArticles } from "../../../actions";
import { fetchSubjects } from "../../../actions";
import { switchToogleMenu } from "../../../actions";

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
            <li>
              <div className="tooglemenu-login">LOGIN</div>
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
    { fetchSubjects, fetchArticles, switchToogleMenu }
  )(ToogleMenu)
);
