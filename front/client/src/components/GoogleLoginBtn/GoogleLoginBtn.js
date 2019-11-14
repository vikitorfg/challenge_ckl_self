import React from "react";
import "./GoogleLoginBtn.css";

import LoginLogic from "../LoginLogic/LoginLogic";

class GoogleLoginBtn extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button className="btn-google flex-center">
          <i className="google icon" />
          <LoginLogic
            googleLoginButton="true"
            signInText="Sign in with Google"
          />
        </button>
      </React.Fragment>
    );
  }
}

export default GoogleLoginBtn;
