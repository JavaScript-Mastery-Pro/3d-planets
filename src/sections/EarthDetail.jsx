import React from "react";

const EarthDetail = () => {
  return (
    <div className="w-[35vw]">
      <p className="font-sans tracking-wide text-lg">
        PLANET
      </p>
      <h1 className="font-sans text-8xl font-bold">Earth</h1>
      <div className="w-28 h-2 rounded-lg bg-skyBlue"></div>
      <p className="sub-text text-lg mb-5 mt-10 tracking-wide">
        Earth, our home planet, has a diameter of about 12,742 KM. It completes
        one orbit around the Sun in approximately 365.25 days and rotates about
        its axis every 24 hours.
      </p>
      <p className="sub-text text-lg mb-5 tracking-wide">
        The atmosphere, mainly composed of nitrogen and oxygen, sustains life,
        while iconic features like Mount Everest and the Pacific Ocean add to
        its natural beauty.
      </p>
    </div>
  );
};

export default EarthDetail;
