import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";

// Internal imports
import { fictionalPlanetCardLists } from "../constants";
import { arrowImg } from "../utils";
import SmallPlanetsViewer from "../PlanetsComponents/SmallPlanetsViewer";

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
    <div className="flex-center gap-0 md:gap-14 flex-wrap mt-28">
      {array.map((list) => (
        <div className={`w-96 h-96`} key={list.id}>
          <div className="relative h-full bg-rectangle-card-bg bg-no-repeat bg-center bg-contain">
            <div className="w-60 h-60 absolute z-50 -top-14 -left-14">
              <Canvas>
                <SmallPlanetsViewer tex={list.map} />
              </Canvas>
            </div>
            <img
              src={arrowImg}
              alt="arrow"
              className="arrow"
              onClick={() => handleClick(list.id)}
            />

            {/* info texts */}
            <div className="flex flex-col h-full justify-end">
              <p className="text-center font-orbiton font-semibold text-3xl">
                {list.title}
              </p>
              <p className="text-center sub-text mb-10">{list.subtitle}</p>
              <div className="flex justify-center gap-10 mb-24">
                <span>
                  <p className="font-orbiton text-center">{list.km}</p>
                  <p className="sub-text text-center">Radius</p>
                </span>
                <span>
                  <p className="font-orbiton text-center">{list.g}</p>
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
