import React from "react";
import { Route, Routes } from "react-router-dom";
import NinjaAi from "./pages/NinjaAi";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NinjaAi />} />
      </Routes>
    </>
  );
};

export default App;
