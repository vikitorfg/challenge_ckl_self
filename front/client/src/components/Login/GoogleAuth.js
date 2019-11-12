import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";

class GoogleAuth extends React.Component {
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
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.googleIsSignedIn === true) {
      return (
        <button onClick={this.onSignOutClick} className="btn-google">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="btn-google">
          <i className="google icon" />
          Sign in with Google
        </button>
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

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
