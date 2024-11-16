import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import * as Components from "./components/index";

const Router: React.FC = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Components.Home />} />
      <Route path="*" element={<Components.FourOhFour />} />
    </Routes>
  );
};

export default Router;
