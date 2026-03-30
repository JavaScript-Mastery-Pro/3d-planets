# 3d-planets — Code Quality Refactor (Educational / Reusable)

You are a senior frontend engineer and educator. Your job is to refactor the `3d-planets` project at the **code level only** — improving readability, reusability, and learning clarity for a YouTube tutorial audience.

## ⚠️ Hard Constraints — Do NOT violate these

- Do **NOT** change any 3D scene setup (Three.js, R3F canvas, lighting, camera, texture loading, atmosphere shaders, planet rotation).
- Do **NOT** change any animation or transition logic (loading animations, scroll behavior, route transitions).
- Do **NOT** change any UI layout, visual design, or Tailwind class names.
- Do **NOT** change routing behavior (`PlanetDetail.jsx`, `PlanetLists.jsx` route logic must remain identical).
- Do **NOT** rename files or move files to different folders.
- Do **NOT** touch the `dist/` folder — it is a build artifact, never edit it.
- Do **NOT** touch `src/store/` folder structure — it may be empty or contain future stores.
- Business logic must remain identical before and after refactor.
- The project must still pass `yarn build` with zero errors after every goal.
- This project uses **Yarn** — do NOT use `npm` commands.

---

## Current project structure (reference)

```
src/
├── components/
│   ├── models/         ← Planet 3D view components
│   │   ├── AuroraView.jsx
│   │   ├── BlazeonView.jsx
│   │   ├── EarthView.jsx
│   │   ├── IgnisMajorView.jsx
│   │   ├── NebulonView.jsx
│   │   ├── SmallPlanetsViewer.jsx
│   │   ├── SpectraView.jsx
│   │   ├── VerdantiaView.jsx
│   │   └── ZephyrionView.jsx
│   └── sections/       ← UI, sections, routes (all merged)
│       ├── Button.jsx
│       ├── CardsContainer.jsx
│       ├── CommonViewer.jsx
│       ├── EarthDetail.jsx
│       ├── EarthInfo.jsx
│       ├── HeroOverLay.jsx
│       ├── Home.jsx
│       ├── Nav.jsx
│       ├── PlanetDetail.jsx
│       ├── PlanetLists.jsx
│       ├── PlanetLoader.jsx
│       ├── RealHero.jsx
│       └── ScrollToTop.jsx
├── store/              ← empty, reserved
├── App.jsx
├── index.css
└── main.jsx

constant/               ← root-level sibling of public/
└── index.js
```

---

## Refactor goals

### Goal 1 — Planet data arrays out of JSX, into constants

This is the highest-priority goal. Scan every file in `src/` for hardcoded data arrays and object literals defined **inside** component functions or at module level inside component files.

Target patterns specific to this project:
- Planet list arrays (id, name, description, texture paths, atmosphere color, radius, etc.)
- Planet card data arrays used in `CardsContainer.jsx` or `PlanetLists.jsx`
- Navigation link arrays used in `Nav.jsx`
- Any array rendered with `.map()` whose source data is defined inline in the file

Rules:
- Move every such array/object into `constant/index.js` as a named export.
- Group exports with clear section comments:
  ```js
  // ─── Planet data ──────────────────────────────
  export const PLANETS = [ ... ];

  // ─── Navigation ───────────────────────────────
  export const NAV_LINKS = [ ... ];

  // ─── Texture paths ────────────────────────────
  export const TEXTURES = { ... };
  ```
- The component must import from `constant/index.js` and render using `.map()` — no inline array literals in JSX.
- Do NOT move arrays that are computed at runtime (derived from props, state, or API calls).
- After extraction, verify that `SmallPlanetsViewer.jsx` (which likely renders a list of small planet objects) also uses the shared `PLANETS` array — do not let it maintain a separate inline copy.

After Goal 1: run `yarn build` — fix any errors before proceeding.

---

### Goal 2 — Extract reusable presentational components

Scan all section and model components for repeated JSX structures. If the **same visual pattern** appears 2 or more times (within one file or across files), extract it.

Target patterns specific to this project:
- Planet card layout (image/thumbnail + name + short description + CTA button) — likely repeated in `CardsContainer.jsx` and possibly `PlanetLists.jsx`
- Planet stat row (label + value pair) — likely repeated in `EarthInfo.jsx` and `EarthDetail.jsx`
- Section heading/subheading block — if repeated across `RealHero.jsx`, `HeroOverLay.jsx`
- The `Button.jsx` component — verify it is used everywhere a button appears; if any file defines its own inline `` with repeated styling, replace it with `Button.jsx`
- Loading/spinner pattern in `PlanetLoader.jsx` — check if loading state is duplicated in any model component

Extraction rules:
- Extract into the **same file** if only used there; extract into `src/components/sections/` if used across files.
- The extracted component must accept props for all varying parts.
- Add JSDoc prop documentation above every extracted component:
  ```jsx
  /**
   * PlanetStatRow — displays a single label/value stat for a planet.
   * @param {string} label  - Stat label (e.g. "Mass", "Radius").
   * @param {string} value  - Stat value (e.g. "5.97 × 10²⁴ kg").
   */
  ```
- Do NOT extract a pattern if the prop interface would be more complex than the repetition it removes.
- Do NOT extract single-use components.

After Goal 2: run `yarn build` — fix any errors before proceeding.

---

### Goal 3 — Extract custom hooks

Identify logic inside components that mixes state + side effects for a single concern. Extract each group into `src/hooks/`.

Target patterns specific to this project:
- Planet loading state management (loading flag + timeout or suspense wrapper) → `usePlanetLoader.js`
- Scroll-to-top behavior (`ScrollToTop.jsx` likely uses `useEffect` + `window.scrollTo`) → `useScrollToTop.js`
- Window resize / responsive breakpoint detection if used in JS → `useWindowSize.js`
- Any `useEffect` that sets up and tears down an event listener → extract to a named hook

Naming rules:
- File names and function names must start with `use`.
- One hook per concern.
- The hook must return exactly what the component needs — no over-exposure.
- After extraction, the component body should read like a description of intent, not implementation.

Example:
```js
// src/hooks/useScrollToTop.js
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
```

After Goal 3: run `yarn build` — fix any errors before proceeding.

---

### Goal 4 — Improve naming and code structure conventions

Apply these rules consistently across all `src/` files:

**Naming:**
- Variables and functions: `camelCase`. Components: `PascalCase`.
- Event handlers: `handle[Event]` (e.g. `handleCardClick`, `handleBack`, `handlePlanetSelect`).
- Boolean state/variables: `is[State]` or `has[State]` (e.g. `isLoading`, `isVisible`, `hasError`).
- Texture/asset import variables: use descriptive names matching the texture's role, not the filename (e.g. `earthDayMap` not `ed`, `ignisAtmosphere` not `ia`).
- Avoid single-letter variable names except for `.map()` index params.

**Structure inside each component file — enforce this order:**
```
1. imports (React → third-party → internal components → constants → assets)
2. file-level constants (if not in constant/index.js)
3. component function
   a. refs
   b. state (useState)
   c. store / context
   d. router hooks (useParams, useNavigate, useLocation)
   e. derived values
   f. custom hooks (src/hooks/)
   g. event handlers (handle*)
   h. useEffect blocks
   i. return JSX
4. export
```

**Comments:**
- Add a single-line comment above each `useEffect` block explaining its purpose.
- Add a single-line comment above each major JSX section (e.g. `{/* Planet grid */}`, `{/* Detail overlay */}`, `{/* Loading fallback */}`).
- Add a single-line comment above each texture/asset import group explaining which planet it belongs to.
- Do NOT comment self-evident code.

After Goal 4: run `yarn build` — fix any errors before proceeding.

---

### Goal 5 — Replace magic values with named constants

Scan all files for hardcoded values with semantic meaning used in JavaScript (not Tailwind):

- Planet sphere radius values (e.g. `2.5`, `1.8`, `3.0`)
- Rotation speed values (e.g. `0.002`, `0.005`)
- Animation duration numbers (e.g. `300`, `1.2`, `2000`)
- Camera position values (e.g. `[0, 0, 5]`)
- Atmosphere thickness or opacity values
- Breakpoint pixel values used in JS

Add them to `constant/index.js` under dedicated groups:

```js
// ─── 3D Scene config ──────────────────────────
export const SCENE = {
  CAMERA_Z: 5,
  ROTATION_SPEED_SLOW: 0.002,
  ROTATION_SPEED_FAST: 0.005,
};

// ─── Planet sizes ─────────────────────────────
export const PLANET_RADIUS = {
  EARTH: 2.5,
  SMALL: 1.2,
  LARGE: 3.5,
};

// ─── Animation ────────────────────────────────
export const ANIMATION = {
  DURATION_FAST: 300,
  DURATION_BASE: 600,
};
```

Rules:
- Do NOT extract Tailwind class strings.
- Do NOT extract values that appear only once and carry no semantic ambiguity.
- After extraction, update every import site.

After Goal 5: run `yarn build` — fix any errors before proceeding.

---

## Execution order

Run goals strictly in order: 1 → 2 → 3 → 4 → 5.

After each goal:
1. Run `yarn build` — fix any errors before moving to the next goal.
2. Briefly state: which files changed, what was extracted or renamed.

Do NOT batch all goals together and edit everything at once.

---

## Deliverables

When all goals are complete, provide:
1. List of all **new files created** (hooks, extracted components)
2. List of all **files modified**
3. Final `yarn build` output log
4. A short per-goal summary: what changed and why it improves the code for a learner watching a YouTube tutorial