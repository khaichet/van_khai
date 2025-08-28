import React from "react";
import { Routes, Route } from "react-router-dom";
import NinjaAi from "./pages/NinjaAi";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar sẽ luôn hiển thị */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ninjaai" element={<NinjaAi />} />
      </Routes>

      {/* Footer sẽ luôn hiển thị */}
      <Footer />
    </div>
  );
};

export default App;
