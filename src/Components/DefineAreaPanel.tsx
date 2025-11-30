// src/Components/DefineAreaPanel.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DefineAreaPanel() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  function handleSearchDrawClick() {
    if (!searchText.trim()) {
      alert('Please enter a city, town, or region before continuing.');
      return;
    }
    // ✅ Navigate to AOI Definition page and pass initialQuery
    navigate('/aoi-definition', { state: { initialQuery: searchText.trim() } });
  }

  return (
    <aside
      style={{
        position: 'absolute',
        width: '314px',
        height: '979px',
        top: '49px',
        left: '72px',
        backgroundColor: '#FFFFFF',
        opacity: 1,
        borderRadius: '0px',
        zIndex: 50,
        boxSizing: 'border-box',
      }}
    >
      {/* Title block */}
      <div
        style={{
          position: 'absolute',
          width: '248px',
          height: '39px',
          top: '5.85px',
          left: '15.86px',
          backgroundColor: '#FFFFFF',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: 700,
          color: '#1F1F1F',
          borderRadius: '6px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          zIndex: 100,
        }}
      >
        Define Area of Interest
      </div>

      {/* Content stack */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '14px',
          width: '286.89px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* Instruction block */}
        <div
          style={{
            width: '280px',
            height: '118px',
            backgroundColor: '#FFFFFF',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '1.4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '12px',
            boxSizing: 'border-box',
            borderRadius: '10px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          Define the area(s) where you will apply your object count & detection model
        </div>

        {/* Search input field */}
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter city, town, or region..."
          style={{
            width: '286.89px',
            height: '40px',
            borderRadius: '10px',
            border: '1px solid #000000',
            padding: '8px',
            fontSize: '13px',
            fontWeight: 500,
            marginBottom: '12px',
          }}
        />

        {/* Option 1: Search or draw — navigates to AOI Definition */}
        <div
          onClick={handleSearchDrawClick}
          style={{
            width: '286.89px',
            height: '112px',
            borderRadius: '10px',
            border: '1px solid #000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            boxSizing: 'border-box',
          }}
        >
          🔍 Search for a city, town... or draw area on map
        </div>

        {/* Option 2: Upload shape file */}
        <div
          onClick={() => console.log('Open overlay: None')}
          style={{
            width: '286.89px',
            height: '67px',
            borderRadius: '10px',
            backgroundColor: '#F5EEE0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            boxSizing: 'border-box',
          }}
        >
          📄 Uploading a shape file
        </div>
      </div>
    </aside>
  );
}
