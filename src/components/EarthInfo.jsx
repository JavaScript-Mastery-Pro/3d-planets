import React from "react";

const EarthInfo = () => {
  return (
    <div className="w-[40vw]">
      <div className="flex gap-16 my-20 flex-wrap">
        <div className="w-52 h-full flexCenter flex-col gap-1">
          <p className="info-sub-text">Diameters</p>
          <p className="font-sans text-3xl font-bold">12,742 km</p>
        </div>
        <div className="w-52 h-full flexCenter flex-col gap-1">
          <p className="info-sub-text">Gravity</p>
          <p className="font-sans text-3xl font-bold">0.376 g</p>
        </div>
        <div className="w-52 h-full flexCenter flex-col gap-1">
          <p className="info-sub-text">Surface Area</p>
          <p className="font-sans text-3xl font-bold">510.1M Sm</p>
        </div>
        <div className="w-52 h-full flexCenter flex-col gap-1">
          <p className="info-sub-text">Orbit Period</p>
          <p className="font-sans text-3xl font-bold">365 days</p>
        </div>
        <div className="w-52 h-full flexCenter flex-col gap-1">
          <p className="info-sub-text">Mean Radius</p>
          <p className="font-sans text-3xl font-bold">6,371 Km</p>
        </div>
        <div className="w-52 h-full flexCenter flex-col gap-1">
          <p className="info-sub-text">Rotation Period</p>
          <p className="font-sans text-3xl font-bold">24 hrs</p>
        </div>
      </div>
    </div>
  );
};

export default EarthInfo;
