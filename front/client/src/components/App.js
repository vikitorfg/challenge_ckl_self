import React from "react";
import ArticlesList from "./ArticlesList";
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div>
        <ArticlesList />
      </div>
    </div>
  );
};

export default App;
