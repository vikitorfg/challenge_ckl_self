import React, { Component } from "react";
import { connect } from "react-redux";

class ArticlesList extends Component {
  render() {
    console.log(this.props);

    return <div>ArticleList</div>;
  }
}

const mapStateToProps = state => {
  return { props: state };
};

export default connect(mapStateToProps)(ArticlesList);
