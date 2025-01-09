import React from "react";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Entry from "./components/Entry";

import ScratchPage from "./components/scratch/ScratchPage";
import ScratchProjects1 from "./components/scratch/scratchprojects/ScratchProjects1";
import ScratchProjects2 from "./components/scratch/scratchprojects/ScratchProjects2";
import ScratchProjects3 from "./components/scratch/scratchprojects/ScratchProjects3";

import HtmlPage from "./components/html/HtmlPage";
import HtmlProject1 from "./components/html/htmlprojects/HtmlProject1";
import HtmlProject2 from "./components/html/htmlprojects/HtmlProject2";
import HtmlProject3 from "./components/html/htmlprojects/HtmlProject3";

import CssPage from "./components/css/CssPage";
import CssProjects1 from "./components/css/cssprojects/CssProjects1";
import CssProjects2 from "./components/css/cssprojects/CssProjects2";
import CssProjects3 from "./components/css/cssprojects/CssProjects3";

import JavaPage from "./components/java/JavaPage";
import JavaProject1 from "./components/java/javaprojects/JavaProject1";
import JavaProject2 from "./components/java/javaprojects/JavaProject2";
import JavaProject3 from "./components/java/javaprojects/JavaProject3";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Each route will render as a standalone page */}
      <Route path="/" element={<Entry />} />
      <Route path="/scratch" element={<ScratchPage />} />
      <Route path="/scratch/project1" element={<ScratchProjects1 />} />
      <Route path="/scratch/project2" element={<ScratchProjects2 />} />
      <Route path="/scratch/project3" element={<ScratchProjects3 />} />
      <Route path="/html" element={<HtmlPage />} />
      <Route path="/html/project1" element={<HtmlProject1 />} />
      <Route path="/html/project2" element={<HtmlProject2 />} />
      <Route path="/html/project3" element={<HtmlProject3 />} />
      <Route path="/css" element={<CssPage />} />
      <Route path="/css/project1" element={<CssProjects1 />} />
      <Route path="/css/project2" element={<CssProjects2 />} />
      <Route path="/css/project3" element={<CssProjects3 />} />
      <Route path="/java" element={<JavaPage />} />
      <Route path="/java/project1" element={<JavaProject1 />} />
      <Route path="/java/project2" element={<JavaProject2 />} />
      <Route path="/java/project3" element={<JavaProject3 />} />
    </Routes>
  );
};

export default App;
