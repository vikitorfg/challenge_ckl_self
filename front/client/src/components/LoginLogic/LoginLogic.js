import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
import { Link, withRouter } from "react-router-dom";

class LoginLogic extends React.Component {
  componentDidMount() {
    // Google API Oauth documentation (harder to find then you'd think) https://developers.google.com/identity/protocols/OAuth2UserAgent
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "286659252617-5n9p7eb2mk2hkmnm06kre3pqasi58agh.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn().then(() => {
      if (this.auth.isSignedIn) {
        this.props.history.push("/");
      }
    });
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.googleIsSignedIn === true) {
      return (
        <div className={this.props.classes} onClick={this.onSignOutClick}>
          LOGOUT
        </div>
      );
    } else if (this.props.googleLoginButton) {
      return <div onClick={this.onSignInClick}>{this.props.signInText}</div>;
    } else {
      return (
        <Link to="/login">
          <div className={this.props.classes}>LOGIN</div>
        </Link>
      );
    }
  }

  render() {
    return <React.Fragment>{this.renderAuthButton()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    googleIsSignedIn: state.googleOauthReducer.isSignedIn,
    googleUserId: state.googleOauthReducer.userId
  };
};

export default withRouter(
  connect(mapStateToProps, { signIn, signOut })(LoginLogic)
);
