import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeView } from "../view/HomeView";
import { Appearel } from "../view/Appearel";
import { Sneakers } from "../view/Sneakers";

export const Routing = (props) => {
  return (
    <Router>
      <switch>
        {props.children}
        <Routes>
          <Route path="/Appearel" element={<Appearel />} />
          <Route path="/Sneakers" element={<Sneakers />} />
          <Route path="/" element={<HomeView />} />
        </Routes>
      </switch>
    </Router>
  );
};
