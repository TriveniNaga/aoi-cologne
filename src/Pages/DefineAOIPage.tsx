// src/Pages/DefineAOIPage.tsx
import DefineAreaPanel from '../Components/DefineAreaPanel';
import MapToolPanel from '../Components/MapToolPanel';

export default function DefineAOIPage() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#F7F7F7',
        overflow: 'hidden',
      }}
    >
      {/* Left definition panel */}
      <DefineAreaPanel />

      {/* Map container */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '380px', // matches the second image’s panel width
          backgroundColor: '#EAEAEA',
        }}
      >
        {/* Base map layer */}
        <img
          src="/assets/map-base.png"
          alt="Map of Cologne"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* AOI outline overlay (white stroke) */}
        <img
          src="/assets/aoi-outline.png"
          alt="Outlined city area as base shape"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '58%',
            height: '58%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'contain',
            pointerEvents: 'none',
          }}
        />

        {/* Zoom controls */}
        <div
          style={{
            position: 'absolute',
            right: '24px',
            top: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            zIndex: 20,
          }}
        >
          <button
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              background: '#FFFFFF',
              border: '1px solid #CFCFCF',
              fontWeight: 700,
            }}
          >
            +
          </button>
          <button
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              background: '#FFFFFF',
              border: '1px solid #CFCFCF',
              fontWeight: 700,
            }}
          >
            -
          </button>
        </div>

        {/* Base Image / Map View toggle */}
        <div
          style={{
            position: 'absolute',
            right: '24px',
            bottom: '24px',
            display: 'flex',
            gap: '8px',
            zIndex: 20,
          }}
        >
          <button
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              background: '#FFFFFF',
              border: '1px solid #CFCFCF',
              fontWeight: 600,
            }}
          >
            Base Image
          </button>
          <button
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              background: '#FFFFFF',
              border: '1px solid #CFCFCF',
              fontWeight: 600,
            }}
          >
            Map View
          </button>
        </div>

        {/* Vertical tool panel */}
        <MapToolPanel />
      </div>
    </div>
  );
}
