import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeView } from "../view/HomeView";
import { Appearel } from "../view/Appearel";
import { Sneakers } from "../view/Sneakers";
import SneakerDetailPage from "../components/SneakerDetailPage";

export const Routing = (props) => {
  return (
    <Router>
      {props.children}
      <Routes>
        <Route path="/Appearel" element={<Appearel />} />
        <Route path="/Sneakers" element={<Sneakers />} />
        <Route path="/Sneakers/Detail" element={<SneakerDetailPage />} />
        <Route path="/" element={<HomeView />} />
      </Routes>
    </Router>
  );
};
