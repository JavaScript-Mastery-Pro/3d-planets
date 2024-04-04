import React from "react";

import { Route, Routes } from "react-router-dom";
import ReactLenis from "@studio-freight/react-lenis";

import Home from "./sections/Home";
import PlanetLists from "./routes/PlanetLists";
import PlanetDetail from "./routes/PlanetDetail";
import ScrollToTop from "./components/ScrollToTop";

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
