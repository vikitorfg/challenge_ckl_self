import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../actions";

class ArticlesList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props);

    return <div>ArticleList</div>;
  }
}

const mapStateToProps = state => {
  return { props: state };
};

export default connect(
  mapStateToProps,
  { fetchArticles }
)(ArticlesList);
