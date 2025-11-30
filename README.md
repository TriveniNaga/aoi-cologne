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
