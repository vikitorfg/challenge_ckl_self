import React, { Component } from "react";
import Cards from "../cards/Cards";

const ArticleList = ({ articles }) => {
  const headline = articles[0];
  const featured = articles.slice(1, 3);
  const defaults = articles.slice(3, 6);

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

export default ArticleList;
