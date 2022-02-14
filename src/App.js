import React from "react";
import { Routing } from "./routes/Routing";
import { NavigationBar } from "./components/navigationbar/NavigationBar";
import "./shared/global/Global.css";
import Footer from "./components/Footer";
import "../src/index.css";
import "./fonts/neuropolitical_rg.ttf";
import CartState from "./context/cart/CartState";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <CartState>
        <Routing>
          <NavigationBar />
          <Cart />
        </Routing>
        <Footer />
      </CartState>
    </>
  );
}

export default App;
