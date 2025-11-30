// src/Components/Sidebar.tsx
import React from 'react';
import { FaCompass, FaHome, FaUser, FaCog } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div style={sidebarStyle}>
      {/* 🧭 Navigation icon — resized to match Home */}
      <button onClick={() => console.log('Toggle map view')} style={navIconStyle}>
        <FaCompass color="#000" size={20} />
      </button>

      {/* 🏠 Home icon */}
      <button onClick={() => console.log('Open dashboard')} style={homeIconStyle}>
        <FaHome color="#000" size={20} />
      </button>

      {/* 👤 Profile icon */}
      <button onClick={() => console.log('Open profile')} style={profileIconStyle}>
        <FaUser color="#000" size={20} />
      </button>

      {/* ⚙️ Settings icon */}
      <button onClick={() => console.log('Open settings')} style={settingsIconStyle}>
        <FaCog color="#000" size={18} />
      </button>
    </div>
  );
}

const sidebarStyle: React.CSSProperties = {
  position: 'absolute',
  width: '72px',
  height: '1055px',
  top: '1px',
  left: '0.69px',
  backgroundColor: '#0000007D',
  opacity: 1,
  zIndex: 100,
};

// Navigation icon — now same size as Home
const navIconStyle: React.CSSProperties = {
  position: 'absolute',
  top: 12,
  left: 13,
  width: 44,
  height: 44,
  backgroundColor: '#E3CDA0',
  opacity: 1,
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// Home icon
const homeIconStyle: React.CSSProperties = {
  position: 'absolute',
  top: 91,
  left: 13,
  width: 44,
  height: 44,
  backgroundColor: '#E3CDA0',
  opacity: 1,
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// Profile icon
const profileIconStyle: React.CSSProperties = {
  position: 'absolute',
  top: 797.02,
  left: 18,
  width: 35,
  height: 36.70477294921875,
  backgroundColor: '#E3CDA0',
  opacity: 1,
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// Settings icon
const settingsIconStyle: React.CSSProperties = {
  position: 'absolute',
  top: 860.99,
  left: 19,
  width: 32,
  height: 34.607357025146484,
  backgroundColor: '#E3CDA0',
  opacity: 1,
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
