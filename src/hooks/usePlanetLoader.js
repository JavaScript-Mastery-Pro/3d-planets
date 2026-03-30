import { useState, useRef, useEffect } from "react";
import * as THREE from "three";

/**
 * usePlanetLoader — manages the loading state and mesh visibility for a planet's textures.
 * @param {string[]} textureDeps - Array of texture URLs used as effect dependencies.
 * @returns {{ isLoading: boolean, meshRef: React.MutableRefObject, manager: THREE.LoadingManager }}
 */
export const usePlanetLoader = (textureDeps = []) => {
  const [isLoading, setIsLoading] = useState(true);
  const meshRef = useRef(new THREE.Mesh());

  // Hide the mesh while textures are loading
  useEffect(() => {
    meshRef.current.visible = false;
  }, textureDeps);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    setIsLoading(false);
    meshRef.current.visible = true;
  };

  return { isLoading, meshRef, manager };
};
