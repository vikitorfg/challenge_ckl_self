import React from "react";
import { connect } from "react-redux";
import { onAuthChange } from "../../actions";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn === true) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { onAuthChange }
)(GoogleAuth);
