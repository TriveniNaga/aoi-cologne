# 🗺️ AOI Cologne Project

A React + TypeScript + Vite project using **OpenLayers** to define and manage Areas of Interest (AOI).  
Users can search for a city/region, highlight it on the map, apply outlines as base images, and export AOIs to GeoJSON.

---

## 🚀 Features

- **Interactive Map** powered by OpenLayers
- **Search & Geocode** using Nominatim (OpenStreetMap)
- **AOI Definition Panel**
  - Search for a city, town, or region
  - Highlight and style AOIs
  - Apply outline as base image
  - Export AOIs to `.geojson`
- **Define Area Panel**
  - Entry point for users
  - Navigate to AOI Definition Panel
- **Navigation** between panels using React Router
- **Map Tools & Overlay Panels** for extended functionality

---

## 📂 Project Structure


src/ 
├── App.tsx
├── Components/
│ ├── MapCanvas.tsx 
│ ├── DefineAreaPanel.tsx 
│ ├── AOIDefinitionPanel.tsx
│ ├── AOIDropdown.tsx 
│ ├── MapOverlayPanel.tsx 
│ ├── MapToolPanel.tsx 
│ └── Sidebar.tsx



---

## 🛠️ Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/<your-username>/aoi-cologne.git
cd aoi-cologne
npm install

----

▶️ Running the Project
//Start the development server:
command : npm run dev

Open your browser at http://localhost:5173


🔄 Navigation Flow
Home (/) → DefineAreaPanel

Enter a city/region

Click search → navigates to AOI Definition

AOI Definition (/aoi-definition) → AOIDefinitionPanel

Highlights the selected AOI

Apply outline as base image

Export AOI to GeoJSON

Navigate back to / with the Back button.

----

📦 Dependencies
    React + TypeScript
    Vite
    OpenLayers
    React Router DOM

----

📌 Future Improvements
Shape file upload support

Enhanced AOI editing tools

Persistent AOI storage

Automated tests with Playwright


---

## ✅ Next Step
1. Create the file in VS Code: `README.md`
2. Paste the above content.
3. Save → then run:

```bash
git add README.md
git commit -m "Add project README"
git push


🗺️ Map Library Choice
Selected: OpenLayers

Reason: Provides robust support for vector layers, projections, and advanced map interactions. It integrates well with React and TypeScript without heavy dependencies.

Alternatives considered: Leaflet (simpler but less powerful for complex AOI workflows), Mapbox GL JS (excellent styling but requires a Mapbox account and has licensing considerations).


🏗️ Architecture Decisions
Component-based structure: Each UI panel (DefineAreaPanel, AOIDefinitionPanel, Sidebar, etc.) is isolated for clarity and reusability.

Routing: Used React Router to navigate between panels (/ → DefineAreaPanel, /aoi-definition → AOIDefinitionPanel).

Map integration: Centralized mapInstance in MapCanvas.tsx so all components can interact with the same OpenLayers map.

Helpers: Functions like fitToBBox and exportAOIToGeoJSON abstract common tasks for scalability.


⚡ Performance Considerations
Current implementation handles single AOIs smoothly.

For future scaling to 1000s of points/polygons:

  Use vector tiling or clustering to avoid rendering all features at once.

  Lazy load or simplify geometries before rendering.

   Keep styles lightweight to reduce redraw overhead.

🧪 Testing Strategy
What was tested:

  Navigation between panels (DefineAreaPanel → AOIDefinitionPanel).

  Geocoding integration with Nominatim.

  Exporting AOIs to GeoJSON.

With more time:

   Automated UI validation with Playwright.

   Stress tests with large datasets (1000+ polygons).

   Unit tests for helper functions (fitToBBox, exportAOIToGeoJSON).


⚖️ Tradeoffs Made
Geocoding: Chose Nominatim (free, open) over commercial APIs like Google Maps due to licensing and cost.

UI: Focused on core AOI workflow rather than advanced styling to meet deadlines.

Shape file upload: Currently a placeholder (console.log) to prioritize AOI search/export features first.


⏱️ Time Spent (2 Days)
Day 1

   Project setup & configuration (Vite, React, OpenLayers): half‑day.

   MapCanvas + helper functions (fitToBBox, fitToFeatures): half‑day.

   DefineAreaPanel (UI + navigation): half‑day.

Day 2

   AOIDefinitionPanel (search, highlight, export): full day.

   Styling & layout adjustments: quarter‑day.

   Documentation & README writing: quarter‑day.