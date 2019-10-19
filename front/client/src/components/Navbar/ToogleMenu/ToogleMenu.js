import React from "react";
import "./ToogleMenu.css";
import { connect } from "react-redux";
import { fetchArticles } from "../../../actions";
import { fetchSubjects } from "../../../actions";

const ToogleMenu = props => {
  return (
    <div>
      <div className="tooglemenu-items">
        <ul>
          {props.subjects.map(subject => {
            return (
              <li key={subject.name}>
                <span onClick={() => props.fetchArticles(subject.name)}>
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
};

const mapStateToProps = state => {
  return { subjects: state.subjectsReducer, articles: state.articlesReducer };
};

export default connect(
  mapStateToProps,
  { fetchSubjects, fetchArticles }
)(ToogleMenu);
