import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeView } from "../view/HomeView";
import { Appearel } from "../view/Appearel";
import { Sneakers } from "../view/Sneakers";
import { TheCompanyView } from "../view/TheCompanyView";
import { ContactUs } from "../view/ContactUs";
import { PrivacyPolicy } from "../view/PrivacyPolicy";
import { TermsOfService } from "../view/TermsOfService";
import { YourRights } from "../view/YourRights";
import SneakerDetailPage from "../components/SneakerDetailPage";

export const Routing = (props) => {
  return (
    <Router>
      {props.children}
      <Routes>
        <Route path="/Appearel" element={<Appearel />} />
        <Route path="/Sneakers" element={<Sneakers />} />
        <Route path="/TheCompanyView" element={<TheCompanyView />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/YourRights" element={<YourRights />} />
        <Route path="/Sneakers/Detail" element={<SneakerDetailPage />} />
        <Route path="/" element={<HomeView />} />
      </Routes>
    </Router>
  );
};
