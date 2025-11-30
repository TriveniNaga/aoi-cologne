import React, { useState } from 'react';
import { mapInstance } from './MapCanvas';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

export default function ViewToggle() {
  const [activeView, setActiveView] = useState<'base' | 'map'>('map');

  function switchToBaseImage() {
    if (!mapInstance || activeView === 'base') return;

    const lightMapLayer = new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        attributions: '&copy; OSM &copy; CARTO',
      }),
    });

    const layers = mapInstance.getLayers().getArray();
    if (layers.length > 0) {
      mapInstance.removeLayer(layers[0]); // replace current base
    }
    mapInstance.getLayers().insertAt(0, lightMapLayer);

    setActiveView('base');
  }

  function switchToMapView() {
    if (!mapInstance || activeView === 'map') return;

    const defaultLayer = new TileLayer({
      source: new XYZ({
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        attributions: '&copy; OpenStreetMap contributors',
      }),
    });

    const layers = mapInstance.getLayers().getArray();
    if (layers.length > 0) {
      mapInstance.removeLayer(layers[0]); // replace current base
    }
    mapInstance.getLayers().insertAt(0, defaultLayer);

    setActiveView('map');
  }

  return (
    <div style={containerStyle}>
      <button
        style={{
          ...baseImageButtonStyle,
          opacity: activeView === 'base' ? 1 : 0.6,
          border: activeView === 'base' ? '2px solid #EB965E' : baseImageButtonStyle.border,
        }}
        onClick={switchToBaseImage}
        disabled={activeView === 'base'}
        title="Switch to base image"
      >
        Base
      </button>

      <button
        style={{
          ...mapViewButtonStyle,
          opacity: activeView === 'map' ? 1 : 0.6,
          border: activeView === 'map' ? '2px solid #EB965E' : mapViewButtonStyle.border,
        }}
        onClick={switchToMapView}
        disabled={activeView === 'map'}
        title="Switch to map view"
      >
        Map
      </button>
    </div>
  );
}

// Beside bottom-right zoom block in a square box
const containerStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '20px', // align with zoom controls
  right: '80px',  // sit just left of zoom block (usually right: 20px)
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  padding: '8px',
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  zIndex: 1000,
};

const baseImageButtonStyle: React.CSSProperties = {
  width: '44px',
  height: '44px',
  borderRadius: '6px',
  border: '2px solid #F5EEE0',
  backgroundColor: '#F5EEE0',
  color: '#000',
  fontSize: '12px',
  cursor: 'pointer',
};

const mapViewButtonStyle: React.CSSProperties = {
  width: '44px',
  height: '44px',
  borderRadius: '6px',
  border: '2px solid #41736B',
  backgroundColor: '#41736B',
  color: '#fff',
  fontSize: '12px',
  cursor: 'pointer',
};
