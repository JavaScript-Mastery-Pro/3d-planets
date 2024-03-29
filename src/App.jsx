import React from "react";
import Lenis from "@studio-freight/lenis";

import { addEffect } from "@react-three/fiber";
import { Route, Routes } from "react-router-dom";

import Home from "./sections/Home";
import PlanetLists from "./routes/PlanetLists";
import PlanetDetail from "./routes/PlanetDetail";

// Use lenis smooth scroll
const lenis = new Lenis({ syncTouch: true });
// Integrate into fibers own raf loop instead of opening another
addEffect((t) => lenis.raf(t));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<PlanetLists />} />
        <Route path="/planets/:id" element={<PlanetDetail />} />
      </Routes>
    </>
  );
};

export default App;
