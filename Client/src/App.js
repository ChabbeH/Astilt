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
import SuccessPayment from "./view/SuccessPayment";

function App() {
  return (
    <>
      <CartState>
        <Router>
          <ScrollToTop />
          <NavigationBar />
          <Cart />
          <Routes>
            <Route path="/appearel" element={<Appearel />} />
            <Route path="/sneakers" element={<Sneakers />} />
            <Route path="/theCompanyView" element={<TheCompanyView />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/termsOfService" element={<TermsOfService />} />
            <Route path="/yourRights" element={<YourRights />} />
            <Route path="/sneakers/detail" element={<SneakerDetailPage />} />
            <Route path="/" element={<HomeView />} />
            <Route path="/success" element={<SuccessPayment />} />
          </Routes>

          <Footer />
        </Router>
      </CartState>
    </>
  );
}

export default App;
