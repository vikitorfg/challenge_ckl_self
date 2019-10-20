import React from "react";
import ArticlesList from "./articleList/ArticleList";
import Navbar from "./Navbar/Navbar";
import ToogleMenu from "./Navbar/ToogleMenu/ToogleMenu";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
        <ToogleMenu />
      </div>
      <div>
        <ArticlesList />
      </div>
    </div>
  );
};

export default App;
