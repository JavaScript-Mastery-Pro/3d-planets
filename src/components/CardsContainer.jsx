import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fictionalPlanetCardLists } from "../constants";
import { arrowImg, fa, fm, loaderVd, mm } from "../utils";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import SmallPlanetsViewer from "../modelsComponent/SmallPlanetsViewer";

const CardsContainer = ({ restrict }) => {
  const nav = useNavigate();

  const handleClick = (id) => {
    nav(`/planets/${id}`);
  };

  const [array, setArray] = useState([]);

  useEffect(() => {
    if (restrict) {
      setArray(fictionalPlanetCardLists.slice(0, 3));
    } else {
      setArray(fictionalPlanetCardLists);
    }
  }, []);

  return (
    <div className="flexCenter gap-14  flex-wrap mt-28">
      {array.map((list) => (
        <div className={`w-96 h-96`} key={list.id}>
          <div className="relative h-full bg-rectangle-card-bg bg-center bg-contain">
            {/* <img
              src={list.img}
              alt={list.title}
              className="absolute w-full h-full object-contain -translate-x-32 -translate-y-32 scale-110"
            /> */}
            <div className="w-60 h-60 absolute z-50 -top-14 -left-14">
              
              <Canvas className="">
                <Suspense
                  fallback={() => {
                    return (
                      <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={"#f8f9fa"} />
                      </mesh>
                    );
                  }}
                >
                  <SmallPlanetsViewer tex={list.map} />
                </Suspense>
              </Canvas>
            </div>
            <img
              src={arrowImg}
              alt="arrow"
              className="absolute right-16 top-16 cursor-pointer z-10 hover:border border-[#e0fbfc50] rounded-full transition-all"
              onClick={() => handleClick(list.id)}
            />

            {/* info texts */}
            <div className="flex flex-col h-full justify-end">
              <p className="text-center font-sans font-semibold text-3xl">
                {list.title}
              </p>
              <p className="text-center sub-text mb-10">{list.subtitle}</p>
              <div className="flex justify-center gap-10 mb-24">
                <span>
                  <p className="font-sans text-center">{list.km}</p>
                  <p className="sub-text text-center">Radius</p>
                </span>
                <span>
                  <p className="font-sans text-center">{list.g}</p>
                  <p className="sub-text text-center">Gravity</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
