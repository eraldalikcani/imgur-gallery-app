import React from "react";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GalleryItem from "./GalleryItem";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/image/:id" element={<GalleryItem />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
