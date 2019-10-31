import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../../actions";
import { withRouter } from "react-router-dom";

import "./ArticleList.css";
import Loader from "../Loader/Loader";
import Cards from "../cards/Cards";

class ArticleList extends Component {
  componentDidMount() {
    if (this.props.match.params.selectedSubject) {
      const selectedSubject = this.props.match.params.selectedSubject.toUpperCase();
      this.props.fetchArticles(selectedSubject);
    } else {
      this.props.fetchArticles();
    }
  }

  shouldComponentUpdate(nextProps) {
    console.log(
      this.props.match.url !== nextProps.match.url ||
        this.props.articles !== nextProps.articles
    );
    return (
      this.props.match.url !== nextProps.match.url ||
      this.props.articles !== nextProps.articles
    );
  }

  render() {
    console.log("I was called");
    if (!this.props.articles[0]) {
      return <Loader />;
    }

    const headline = this.props.articles[0];
    const featured = this.props.articles.slice(1, 3);
    const defaults = this.props.articles.slice(3, 6);

    return (
      <div className="body">
        <div className="front-page">
          <Cards article={headline} type="headline" />
          <div className="featured">
            {featured.map(f => (
              <Cards key={f.title} article={f} type="featured" />
            ))}
          </div>
        </div>
        <div className="default-div">
          {defaults.map(d => (
            <Cards key={d.title} article={d} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { articles: state.articlesReducer };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchArticles }
  )(ArticleList)
);
