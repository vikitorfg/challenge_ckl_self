import React from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../../actions";

import "./ArticleList.css";
import Loader from "../Loader/Loader";
import Cards from "../cards/Cards";

const ArticleList = props => {
  if (!props.articles[0]) {
    return <Loader />;
  }

  const headline = props.articles[0];
  const featured = props.articles.slice(1, 3);
  const defaults = props.articles.slice(3, 6);

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
};

const mapStateToProps = state => {
  return { articles: state.articlesReducer };
};

export default connect(
  mapStateToProps,
  { fetchArticles }
)(ArticleList);
