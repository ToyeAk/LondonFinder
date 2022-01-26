import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./routes/LandingPage"
import { useState } from "react";
import  Results from "./routes/Results";


function App() {




  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/picks" element={<Results />} />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
