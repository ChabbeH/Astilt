import React from "react";
import { Routing } from "./routes/Routing";
import { NavigationBar } from "./components/navigationbar/NavigationBar";
import "./shared/global/Global.css";
import Footer from "./components/Footer";
import { HomeView } from "./view/HomeView";

function App() {
  return (
    <>
      <Routing>
        <NavigationBar />
      </Routing>
      <Footer />
    </>
  );
}

export default App;
