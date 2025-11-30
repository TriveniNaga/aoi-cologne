// src/Components/MapToolPanel.tsx
import React from 'react';

export default function MapToolPanel() {
  return (
    <div style={panelStyle}>
      <div style={iconStackStyle}>
        {/* 1️⃣ Polyline tool */}
        <img src="/assests/polyline-tool.png" alt="" style={iconImageStyle(34.1, 32.79)} />

        {/* 2️⃣ Bezier tool */}
        <img src="/assests/bezier-tool.png" alt="" style={iconImageStyle(34.1, 32.79)} />

        {/* 3️⃣ Polygon tool */}
        <img src="/assests/polygon-tool.png" alt="" style={iconImageStyle(34.1, 32.79)} />

        {/* 4️⃣ Divider line */}
        <div style={dividerStyle} />

        {/* 5️⃣ Cursor tool */}
        <img src="/assests/cursor-tool.png" alt="" style={iconImageStyle(31.48, 31.48)} />

        {/* 6️⃣ Cursor crop tool */}
        <img src="/assests/cursor-crop-tool.png" alt="" style={iconImageStyle(31.48, 31.48)} />
      </div>
    </div>
  );
}

// 🔲 Main panel container — pinned above zoom controls
const panelStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '180px', // 👆 lifted above zoom buttons
  right: '20px',
  width: 65.5859375,
  height: 305.6304626464844,
  backgroundColor: '#FFFFFF',
  borderRadius: 10,
  boxShadow: '0px 5.25px 5.25px 0px #00000040',
  opacity: 1,
  zIndex: 200,
};

// 📦 Icon stack container
const iconStackStyle: React.CSSProperties = {
  position: 'absolute',
  top: 17.05,
  left: 15.95,
  width: 34.10468673706055,
  height: 259.7203063964844,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 19.68,
  opacity: 1,
};

// 🖼️ Icon image style
const iconImageStyle = (width: number, height: number): React.CSSProperties => ({
  width: `${width}px`,
  height: `${height}px`,
  borderRadius: '5.25px',
  objectFit: 'contain', // ✅ keeps image inside box without overflow
  display: 'block',
});

// ➖ Divider line
const dividerStyle: React.CSSProperties = {
  width: 32.79296875,
  height: 0,
  borderTop: '1.31px solid #B8642B',
  opacity: 1,
};
