// ─── Breakpoints ──────────────────────────────
export const MOBILE_BREAKPOINT = 768;

// ─── 3D Scene config ──────────────────────────
export const SCENE = {
  REFERENCE_WIDTH: 1200,
  MIN_SCALE_FACTOR: 0.5,
  MAX_SCALE_FACTOR: 1.01,
  ORBIT_ROTATE_SPEED: 0.2,
  ORBIT_AUTO_ROTATE_SPEED: 0.2,
  TEXTURE_REPEAT: 4,
};

// ─── Planet sizes ─────────────────────────────
export const PLANET_SCALE = {
  DETAIL: 4,
  EARTH: 2.5,
  EARTH_CLOUD: 2.52,
  SMALL: 2.25,
};

export const PLANET_OFFSET_Y = {
  DETAIL: 1.5,
  EARTH: -0.5,
};

// ─── Sphere geometry segments ─────────────────
export const SPHERE_GEOMETRY = {
  DETAIL: [1, 32, 32],
  SMALL: [1, 16, 16],
};

// ─── Animation speeds ─────────────────────────
export const CLOUD_ROTATION_SPEED = -0.0002;

// ─── UI assets ────────────────────────────────
import planetCard from "@/assets/imgs/planet-card-bg.png";
import rectangle from "@/assets/imgs/rectangle.svg";
import arrow from "@/assets/imgs/arrow.png";
import back from "@/assets/imgs/back.svg";

export const planetCardBg = planetCard;
export const rectangleBg = rectangle;
export const arrowImg = arrow;
export const backImg = back;

// ─── Aurora textures ─────────────────────────
import auroraMapImg from "@/assets/imgs/textures/earth/m.jpg";
import auroraNormalImg from "@/assets/imgs/textures/earth/mn.jpg";
import auroraDisplacementImg from "@/assets/imgs/textures/earth/md.png";
import auroraAOImg from "@/assets/imgs/textures/earth/ma.jpg";

export const auroraMap = auroraMapImg;
export const auroraNormal = auroraNormalImg;
export const auroraDisplacement = auroraDisplacementImg;
export const auroraAO = auroraAOImg;

// ─── Blazeon textures ────────────────────────
import blazeonMapImg from "@/assets/imgs/textures/earth/f.jpg";
import blazeonNormalImg from "@/assets/imgs/textures/earth/fn.jpg";
import blazeonDisplacementImg from "@/assets/imgs/textures/earth/fd.png";
import blazeonAOImg from "@/assets/imgs/textures/earth/fa.jpg";

export const blazeonMap = blazeonMapImg;
export const blazeonNormal = blazeonNormalImg;
export const blazeonDisplacement = blazeonDisplacementImg;
export const blazeonAO = blazeonAOImg;

// ─── Zephyrion textures ──────────────────────
import zephyrionMapImg from "@/assets/imgs/textures/earth/j.jpg";
import zephyrionNormalImg from "@/assets/imgs/textures/earth/jn.jpg";
import zephyrionDisplacementImg from "@/assets/imgs/textures/earth/jd.png";
import zephyrionAOImg from "@/assets/imgs/textures/earth/ja.jpg";

export const zephyrionMap = zephyrionMapImg;
export const zephyrionNormal = zephyrionNormalImg;
export const zephyrionDisplacement = zephyrionDisplacementImg;
export const zephyrionAO = zephyrionAOImg;

// ─── Nebulon textures ────────────────────────
import nebulonMapImg from "@/assets/imgs/textures/Nebulon Delta/nd.jpg";
import nebulonNormalImg from "@/assets/imgs/textures/Nebulon Delta/ndn.jpg";
import nebulonDisplacementImg from "@/assets/imgs/textures/Nebulon Delta/ndd.png";
import nebulonAOImg from "@/assets/imgs/textures/Nebulon Delta/nda.jpg";
import nebulonRoughnessImg from "@/assets/imgs/textures/Nebulon Delta/ndr.jpg";

export const nebulonMap = nebulonMapImg;
export const nebulonNormal = nebulonNormalImg;
export const nebulonDisplacement = nebulonDisplacementImg;
export const nebulonAO = nebulonAOImg;
export const nebulonRoughness = nebulonRoughnessImg;

// ─── Verdantia textures ──────────────────────
import verdantiaMapImg from "@/assets/imgs/textures/Verdantia/lm.jpg";
import verdantiaNormalImg from "@/assets/imgs/textures/Verdantia/ln.jpg";
import verdantiaDisplacementImg from "@/assets/imgs/textures/Verdantia/ld.png";
import verdantiaAOImg from "@/assets/imgs/textures/Verdantia/la.jpg";

export const verdantiaMap = verdantiaMapImg;
export const verdantiaNormal = verdantiaNormalImg;
export const verdantiaDisplacement = verdantiaDisplacementImg;
export const verdantiaAO = verdantiaAOImg;

// ─── Spectra textures ────────────────────────
import spectraMapImg from "@/assets/imgs/textures/Spectra/sm.jpg";
import spectraNormalImg from "@/assets/imgs/textures/Spectra/sn.jpg";
import spectraDisplacementImg from "@/assets/imgs/textures/Spectra/sd.png";
import spectraAOImg from "@/assets/imgs/textures/Spectra/sa.jpg";
import spectraRoughnessImg from "@/assets/imgs/textures/Spectra/sr.jpg";

export const spectraMap = spectraMapImg;
export const spectraNormal = spectraNormalImg;
export const spectraDisplacement = spectraDisplacementImg;
export const spectraAO = spectraAOImg;
export const spectraRoughness = spectraRoughnessImg;

// ─── Ignis Major textures ────────────────────
import ignisMapImg from "@/assets/imgs/textures/IgnisMajor/im.jpg";
import ignisNormalImg from "@/assets/imgs/textures/IgnisMajor/in.jpg";
import ignisDisplacementImg from "@/assets/imgs/textures/IgnisMajor/id.png";
import ignisAOImg from "@/assets/imgs/textures/IgnisMajor/ia.jpg";
import ignisRoughnessImg from "@/assets/imgs/textures/IgnisMajor/ir.jpg";

export const ignisMap = ignisMapImg;
export const ignisNormal = ignisNormalImg;
export const ignisDisplacement = ignisDisplacementImg;
export const ignisAO = ignisAOImg;
export const ignisRoughness = ignisRoughnessImg;

// ─── Earth (hero) textures ───────────────────
import earthMapImg from "@/assets/imgs/textures/HeroEarth/em.jpg";
import earthBumpImg from "@/assets/imgs/textures/HeroEarth/eb.jpg";
import earthSpecImg from "@/assets/imgs/textures/HeroEarth/es.jpg";
import earthCloudImg from "@/assets/imgs/textures/HeroEarth/ec.png";
import earthNormalImg from "@/assets/imgs/textures/HeroEarth/en.jpg";

export const earthMap = earthMapImg;
export const earthBump = earthBumpImg;
export const earthSpec = earthSpecImg;
export const earthCloud = earthCloudImg;
export const earthNormal = earthNormalImg;

// ─── Sun texture ─────────────────────────────
import sunImg from "@/assets/imgs/textures/sun/sun.jpeg";

export const sunMap = sunImg;

// ─── Mars textures ───────────────────────────
import marsMapImg from "@/assets/imgs/textures/Mars/mar.webp";
import marsNormalImg from "@/assets/imgs/textures/Mars/marn.jpg";
import marsBumpImg from "@/assets/imgs/textures/Mars/marb.jpg";

export const marsMap = marsMapImg;
export const marsNormal = marsNormalImg;
export const marsBump = marsBumpImg;

// ─── Videos & loaders ────────────────────────
import earthMp4 from "@/assets/vds/earth.mp4";
import loaderGif from "@/assets/vds/loadingPlanet.gif";

export const earthVideo = earthMp4;
export const loaderGifSrc = loaderGif;

// ─── Navigation ───────────────────────────────
export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Planets", path: "/planets" },
];

// ─── Planet detail stat fields ───────────────
export const PLANET_STAT_FIELDS = [
  { label: "Diameters", key: "diameter", unit: "km" },
  { label: "Gravity", key: "gravity", unit: "g" },
  { label: "Surface Area", key: "area", unit: "M SM" },
];

// — Planet data
import BlazeonView from "@/components/models/BlazeonView";
import AuroraView from "@/components/models/AuroraView";
import ZephyrionView from "@/components/models/ZephyrionView";
import NebulonView from "@/components/models/NebulonView";
import VerdantiaView from "@/components/models/VerdantiaView";
import SpectraView from "@/components/models/SpectraView";
import IgnisMajorView from "@/components/models/IgnisMajorView";

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
    map: blazeonMap,
  },
  {
    id: 2,
    title: "Aurora",
    subtitle: "The 3rd Planet",
    km: "3,390 km",
    g: "0.546 g",
    map: auroraMap,
  },
  {
    id: 3,
    title: "Zephyrion",
    subtitle: "The 4th Planet",
    km: "4,540 km",
    g: "0.386 g",
    map: zephyrionMap,
  },
  {
    id: 4,
    title: "Ignis Major",
    subtitle: "The 5th Planet",
    km: "6,540 km",
    g: "0.546 g",
    map: ignisMap,
  },
  {
    id: 5,
    title: "Verdantia",
    subtitle: "The 2nd Planet",
    km: "3,540 km",
    g: "0.345 g",
    map: verdantiaMap,
  },
  {
    id: 6,
    title: "Spectra",
    subtitle: "The 7th Planet",
    km: "4,765 km",
    g: "0.987 g",
    map: spectraMap,
  },
  {
    id: 7,
    title: "Nebulon",
    subtitle: "The 6th Planet",
    km: "4,540 km",
    g: "0.386 g",
    map: nebulonMap,
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
    video: earthVideo,
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
    video: earthVideo,
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
    video: earthVideo,
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
    video: earthVideo,
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
    video: earthVideo,
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
    video: earthVideo,
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
    video: earthVideo,
    model: NebulonView,
    color: "#081c15",
  },
];
