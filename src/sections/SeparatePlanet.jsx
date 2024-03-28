import { useLenis } from "@studio-freight/react-lenis";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const SeparatePlanet = () => {
  return (
    <div className="w-screen h-screen bg-planet-card-bg bg-cover px-20">
      SeparatePlanet
    </div>
  );
};

export default SeparatePlanet;
