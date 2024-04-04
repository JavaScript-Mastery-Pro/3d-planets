import React from "react";
import Lenis from "@studio-freight/lenis";

import { Route, Routes } from "react-router-dom";

import Home from "./sections/Home";
import PlanetLists from "./routes/PlanetLists";
import PlanetDetail from "./routes/PlanetDetail";
import ReactLenis from "@studio-freight/react-lenis";

// Use lenis smooth scroll
// const lenis = new Lenis({ syncTouch: true });
// // Integrate into fibers own raf loop instead of opening another
// addEffect((t) => lenis.raf(t));

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
