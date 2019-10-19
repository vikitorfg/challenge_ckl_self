import React from "react";
import "./ToogleMenu.css";

const ToogleMenu = () => {
  return (
    <div>
      <div className="tooglemenu-items">
        <ul>
          {this.props.subjectList.map(subject => {
            return (
              <li key={subject}>
                <span onClick={() => this.props.handleSubjectChange(subject)}>
                  {subject}
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

export default ToogleMenu;
