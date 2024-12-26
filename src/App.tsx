import React from "react";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HtmlPage from "./components/html/HtmlPage";
import CssPage from "./components/css/CssPage";
import Entry from "./components/Entry";
import HtmlProject1 from "./components/html/htmlprojects/HtmlProject1";
import HtmlProject2 from "./components/html/htmlprojects/HtmlProject2";
import HtmlProject3 from "./components/html/htmlprojects/HtmlProject3";
import CssProjects1 from "./components/css/cssprojects/CssProjects1";
import CssProjects2 from "./components/css/cssprojects/CssProjects2";
import CssProjects3 from "./components/css/cssprojects/CssProjects3";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Each route will render as a standalone page */}
      <Route path="/" element={<Entry />} />
      <Route path="/html" element={<HtmlPage />} />
      <Route path="/css" element={<CssPage />} />
      <Route path="/html/project1" element={<HtmlProject1 />} />
      <Route path="/html/project2" element={<HtmlProject2 />} />
      <Route path="/html/project3" element={<HtmlProject3 />} />
      <Route path="/css/project1" element={<CssProjects1 />} />
      <Route path="/css/project2" element={<CssProjects2 />} />
      <Route path="/css/project3" element={<CssProjects3 />} />
    </Routes>
  );
};

export default App;