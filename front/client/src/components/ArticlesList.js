import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../actions";

class ArticlesList extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.props.fetchArticles("BUSINESS")}>
            fetchArticle
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { articles: state.articlesReducer };
};

export default connect(
  mapStateToProps,
  { fetchArticles }
)(ArticlesList);
