import React from "react";
import "./ToogleMenu.css";
import { connect } from "react-redux";
import { fetchArticles } from "../../../actions";
import { fetchSubjects } from "../../../actions";
import { switchToogleMenu } from "../../../actions";

const ToogleMenu = props => {
  const filterAndClose = subject => {
    props.fetchArticles(subject);
    props.switchToogleMenu();
  };

  if (props.toogleMenuStatus) {
    return (
      <div>
        <div className="tooglemenu-items">
          <ul>
            {props.subjects.map(subject => {
              return (
                <li key={subject.name}>
                  <span onClick={() => filterAndClose(subject.name)}>
                    {subject.name}
                  </span>
                </li>
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

export default connect(
  mapStateToProps,
  { fetchSubjects, fetchArticles, switchToogleMenu }
)(ToogleMenu);
