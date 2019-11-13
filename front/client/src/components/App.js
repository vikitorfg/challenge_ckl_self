import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ArticlesList from "./articleList/ArticleList";
import Navbar from "./Navbar/Navbar";
import ToogleMenu from "./ToogleMenu/ToogleMenu";
import Login from "./Login/Login";
import Interests from "./Interests/Interests";
import Test from "./Test/Test";
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
          <Route path="/login" exact component={Login} />
          <Route path="/interests" exact component={Interests} />
          <Route path="/test" exact component={Test} />
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
