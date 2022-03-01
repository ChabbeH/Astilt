import React from "react";
import { NavigationBar } from "./components/navigationbar/NavigationBar";
import "./shared/global/Global.css";
import Footer from "./components/Footer";
import "../src/index.css";
import "./fonts/neuropolitical_rg.ttf";
import CartState from "./context/cart/CartState";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeView } from "../src/view/HomeView";
import { Appearel } from "../src/view/Appearel";
import { Sneakers } from "../src/view/Sneakers";
import { TheCompanyView } from "../src/view/TheCompanyView";
import { ContactUs } from "../src/view/ContactUs";
import { PrivacyPolicy } from "../src/view/PrivacyPolicy";
import { TermsOfService } from "../src/view/TermsOfService";
import { YourRights } from "../src/view/YourRights";
import SneakerDetailPage from "../src/components/SneakerDetailPage";
import { ScrollToTop } from "../src/components/ScrollToTop";

function App() {
  return (
    <>
      <CartState>
        <Router>
          <ScrollToTop />
          <NavigationBar />
          <Cart />
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

          <Footer />
        </Router>
      </CartState>
    </>
  );
}

export default App;
