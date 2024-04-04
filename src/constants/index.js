import { earthVd, fm, im, jm, lm, mm, ndm, sm } from "../utils";
import BlazeonView from "../PlanetsComponents/BlazeonView";
import AuroraView from "../PlanetsComponents/AuroraView";
import ZephyrionView from "../PlanetsComponents/ZephyrionView";
import NebulonView from "../PlanetsComponents/NebulonView";
import VerdantiaView from "../PlanetsComponents/VerdantiaView";
import SpectraView from "../PlanetsComponents/SpectraView";
import IgnisMajorView from "../PlanetsComponents/IgnisMajorView";

export const earthInfo = [
  {
    id: 1,
    title: "Diameters",
    number: "12,742 km",
  },
  {
    id: 2,
    title: "Gravity",
    number: "0.376 g",
  },
  {
    id: 3,
    title: "Surface Area",
    number: "510.1M Sm",
  },
  {
    id: 4,
    title: "Orbit Period",
    number: "365 days",
  },
  {
    id: 5,
    title: "Mean Radius",
    number: "6,371 Km",
  },
  {
    id: 6,
    title: "Rotation Period",
    number: "24 hrs",
  },
];

export const fictionalPlanetCardLists = [
  {
    id: 1,
    title: "Blazeon",
    subtitle: "The 1st Planet",
    km: "8,945 km",
    g: "0.376 g",
    map: fm,
  },
  {
    id: 2,
    title: "Aurora",
    subtitle: "The 3rd Planet",
    km: "3,390 km",
    g: "0.546 g",
    map: mm,
  },
  {
    id: 3,
    title: "Zephyrion",
    subtitle: "The 4th Planet",
    km: "4,540 km",
    g: "0.386 g",
    map: jm,
  },
  {
    id: 4,
    title: "Ignis Major",
    subtitle: "The 5th Planet",
    km: "6,540 km",
    g: "0.546 g",
    map: im,
  },
  {
    id: 5,
    title: "Verdantia",
    subtitle: "The 2nd Planet",
    km: "3,540 km",
    g: "0.345 g",
    map: lm,
  },
  {
    id: 6,
    title: "Spectra",
    subtitle: "The 7th Planet",
    km: "4,765 km",
    g: "0.987 g",
    map: sm,
  },
  {
    id: 7,
    title: "Nebulon",
    subtitle: "The 6th Planet",
    km: "4,540 km",
    g: "0.386 g",
    map: ndm,
  },
];

export const fictionalPlanetDetailsLists = [
  {
    id: 1,
    title: "Blazeon",
    des: "Blazeon Prime orbits closest to its star within the Enigma Galaxy, boasting the highest surface temperature among all known planets. It's categorized as a scorched terrestrial planet with a diameter of 8,945 kilometers.",
    diameter: "12,742",
    gravity: "0.370",
    area: "510.1M",
    vd: earthVd,
    model: BlazeonView,
    color: "#4c110d",
  },
  {
    id: 2,
    title: "Aurora",
    des: "Aurora Nexus, nestled in the heart of the Celestial Cluster, is renowned for its mesmerizing auroras that dance across its sky. This gas giant is the largest in its planetary system, with an intricate ring system encircling it.",
    diameter: "12,742",
    gravity: "0.376",
    area: "510.1M",
    vd: earthVd,
    model: AuroraView,
    color: "#051923",
  },
  {
    id: 3,
    title: "Zephyrion",
    des: "Zephyrion is a serene, oceanic world located in the Tranquil Nebula, with its surface almost entirely covered by vast, undulating oceans. It's categorized as an aquatic planet with minimal landmasses, offering unique habitats for diverse marine life forms.",
    diameter: "12,742",
    gravity: "0.371",
    area: "510.1M",
    vd: earthVd,
    model: ZephyrionView,
    color: "#142d19",
  },
  {
    id: 4,
    title: "Ignis Major",
    des: "Ignis Major Delta, shrouded in perpetual mist, is a gas giant known for its enigmatic floating islands suspended within its thick atmosphere. It's located in the midst of the Mysterium Nebula, captivating explorers with its mysterious allure.",
    diameter: "49,876",
    gravity: "0.435",
    area: "987.1M",
    vd: earthVd,
    model: IgnisMajorView,
    color: "#000000",
  },
  {
    id: 5,
    title: "Verdantia",
    des: "Verdantia, nestled in the Lushia System, is an exquisitely lush terrestrial planet adorned with vibrant flora and fauna. Its atmosphere is rich in oxygen, making it a haven for biodiversity and exploration.",
    diameter: "15,669",
    gravity: "0.919",
    area: "510.1M",
    vd: earthVd,
    model: VerdantiaView,
    color: "#241508",
  },
  {
    id: 6,
    title: "Spectra",
    des: "Spectra Prime, located in the Chromatic Expanse, is a planet renowned for its mesmerizing light displays caused by unique mineral formations that refract light in a myriad of colors across its surface. It's a popular destination for astronomers and artists alike.",
    diameter: "24,801",
    gravity: "1.057",
    area: "432.1M",
    vd: earthVd,
    model: SpectraView,
    color: "#481213",
  },
  {
    id: 7,
    title: "Nebulon",
    des: "Nebulon, situated closest to its star in the Ember System, is a fiery inferno of molten lava and volcanic activity. Its extreme conditions make it uninhabitable, yet it remains a subject of fascination for scientists studying planetary formation and geology.",
    diameter: "10,583",
    gravity: "0.371",
    area: "235.1M",
    vd: earthVd,
    model: NebulonView,
    color: "#081c15",
  },
];
