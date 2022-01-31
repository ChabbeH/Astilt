import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeView } from "../view/HomeView";
import { TestSida } from "../view/TestSida";
import { TestSida2 } from "../view/TestSida2";
import { TestSida3 } from "../view/TestSida3";

export const Routing = (props) => {
  return (
    <Router>
      <switch>
        {props.children}
        <Routes>
          <Route path="/testsida" element={<TestSida />} />
          <Route path="/testsida2" element={<TestSida2 />} />
          <Route path="/testsida3" element={<TestSida3 />} />
          <Route path="/" element={<HomeView />} />
        </Routes>
      </switch>
    </Router>
  );
};
