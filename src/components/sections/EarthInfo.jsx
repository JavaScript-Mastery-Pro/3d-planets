import React from "react";
import { earthInfo } from "@c";
import PlanetStatRow from "@/components/sections/PlanetStatRow";

const EarthInfo = () => {
  return (
    <div className="lg:w-[40vw]">
      <div className="flex justify-center gap-16 my-20 flex-wrap">
        {earthInfo.map((info) => (
          <PlanetStatRow
            key={info.id}
            label={info.title}
            value={info.number}
            className={info.id === 3 ? "mb-96 md:m-0" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default EarthInfo;
