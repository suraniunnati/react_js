import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./router/mainRout";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Navbar />
          <MainRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;
