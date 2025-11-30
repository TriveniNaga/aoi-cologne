// src/Components/MapOverlayPanel.tsx
import React from 'react';

interface Props {
  mapInstance: any; // Pass your OpenLayers map instance from MapCanvas
}

export default function MapOverlayPanel({ mapInstance }: Props) {
  const zoomIn = () => {
    if (mapInstance) {
      const view = mapInstance.getView();
      view.setZoom(view.getZoom() + 1);
    }
  };

  const zoomOut = () => {
    if (mapInstance) {
      const view = mapInstance.getView();
      view.setZoom(view.getZoom() - 1);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={panelStyle}>
        <div style={stackStyle}>
          {/* 🗨️ Speech bubble icon */}
          <div style={iconStyle}>💬</div>

          {/* ➕ Zoom In */}
          <button onClick={zoomIn} style={buttonStyle}>+</button>

          {/* ━ Horizontal line */}
          <div style={lineStyle} />

          {/* ➖ Zoom Out */}
          <button onClick={zoomOut} style={buttonStyle}>−</button>
        </div>
      </div>
    </div>
  );
}

// Container pinned to bottom-right
const containerStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  zIndex: 200,
};

// Main panel block
const panelStyle: React.CSSProperties = {
  width: '48px',
  height: '106px',
  backgroundColor: '#FFFFFF',
  opacity: 1,
  borderRadius: '10px',
  boxShadow: '0px 4px 4px 0px #00000040',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// Stack of icons inside the panel
const stackStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '89px',
  width: '26px',
  gap: '5px',
};

// Icon block (speech bubble)
const iconStyle: React.CSSProperties = {
  width: '24px',
  height: '24px',
  backgroundColor: '#B8642B',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// Zoom buttons
const buttonStyle: React.CSSProperties = {
  width: '25px',
  height: '25px',
  backgroundColor: '#B8642B',
  color: '#fff',
  fontSize: '18px',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// Horizontal line
const lineStyle: React.CSSProperties = {
  width: '25px',
  height: '0px',
  borderWidth: '0.5px',
  border: '0.5px solid #B8642B',
  opacity: 1,
};
