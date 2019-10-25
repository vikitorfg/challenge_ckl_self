import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ArticlesList from "./articleList/ArticleList";
import Navbar from "./Navbar/Navbar";
import ToogleMenu from "./Navbar/ToogleMenu/ToogleMenu";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
          <Navbar />
          <ToogleMenu />
        </div>
        <div>
          <Route path="/" exact component={ArticlesList} />
          <Route path="/subject/:selectedSubject" component={ArticlesList} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

// const mapStateToProps = state => {
//   return { articles: state.articlesReducer };
// };

// export default withRouter(
//   connect(
//     mapStateToProps,
//     { fetchArticles }
//   )(App)
// );
