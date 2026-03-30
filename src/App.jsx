import React from "react";

import { Route, Routes } from "react-router-dom";
import ReactLenis from "lenis/react";

import Home from "@/components/sections/Home";
import PlanetLists from "@/components/sections/PlanetLists";
import PlanetDetail from "@/components/sections/PlanetDetail";
import ScrollToTop from "@/components/sections/ScrollToTop";

const App = () => {
  return (
    <ReactLenis root>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<PlanetLists />} />
        <Route path="/planets/:id" element={<PlanetDetail />} />
      </Routes>
    </ReactLenis>
  );
};

export default App;
