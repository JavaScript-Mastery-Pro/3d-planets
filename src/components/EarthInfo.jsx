import React from "react";
import { earthInfo } from "../constants";

const EarthInfo = () => {
  return (
    <div className="lg:w-[40vw]">
      <div className="flex justify-center gap-16 my-20 flex-wrap">
        {earthInfo.map((info) => (
          <div
            className={`info-text ${info.id === 3 && "mb-96 md:m-0"}`}
            key={info.id}
          >
            <p className="info-sub-text">{info.title}</p>
            <p className="info-number">{info.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarthInfo;
