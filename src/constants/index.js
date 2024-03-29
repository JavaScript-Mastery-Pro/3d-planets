import EarthView from "../modelsComponent/EarthView";
import MarsView from "../modelsComponent/MarsView";
import MercuryView from "../modelsComponent/MercuryView";
import { earthImg, earthVd, marsImg, mercuryImg } from "../utils";

export const planetCardLists = [
  {
    id: 1,
    title: "Mercury",
    subtitle: "The 1st Planet",
    km: "3,390 km",
    g: "0.376 g",
    img: mercuryImg,
    path: "../assets/imgs/Mercury.svg",
  },
  {
    id: 2,
    title: "Earth",
    subtitle: "The 3th Planet",
    km: "3,390 km",
    g: "0.376 g",
    img: earthImg,
    path: "../assets/imgs/Earth.svg",
  },
  {
    id: 3,
    title: "Mars",
    subtitle: "The 4th Planet",
    km: "3,390 km",
    g: "0.376 g",
    img: marsImg,
    path: "../assets/imgs/Mars.svg",
  },
];

export const planetDetailsLists = [
  {
    id: 1,
    title: "Mercury",
    des: "Mercury is the first planet from the Sun and the smallest in the Solar System.Mercury is classified as a terrestrial planet, with roughly the same surface gravity as Mars.",
    diameter: "12,742",
    gravity: "0.370",
    area: "510.1M",
    vd: earthVd,
    model: MercuryView,
    color: "#3e000c",
  },
  {
    id: 2,
    title: "Earth",
    des: "Earth, our home planet, has a diameter of about 12,742 kilometers. It completes one orbit around the Sun in approximately 365.25 days and rotates about its axis every 24 hours.",
    diameter: "12,742",
    gravity: "0.376",
    area: "510.1M",
    vd: earthVd,
    model: EarthView,
    color: "#051923",
  },
  {
    id: 3,
    title: "Mars",
    des: "Mars is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron(III) oxide dust, giving it the nickname 'the Red Planet'.",
    diameter: "12,742",
    gravity: "0.371",
    area: "510.1M",
    vd: earthVd,
    model: MarsView,
    color: "#081c15",
  },
];
