import { Html } from "@react-three/drei";
import React from "react";
// Internal imports
import { loaderVd } from "../utils";

const PlanetLoader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <Html className="absolute w-96 h-60 -left-10 -top-28">
          <div className="w-60 h-60 absolute -left-20 -top-2 flex-center">
            <img src={loaderVd} width={50} height={50} />
          </div>
        </Html>
      )}
    </>
  );
};

export default PlanetLoader;
