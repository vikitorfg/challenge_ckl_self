import React from "react";
import ArticlesList from "./ArticlesList";
import Navbar from "./Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="body">
        <ArticlesList />
      </div>
    </div>
  );
};

export default App;
