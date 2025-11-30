// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapCanvas from './Components/MapCanvas';
import DefineAreaPanel from './Components/DefineAreaPanel';
import AOIDefinitionPanel from './Components/AOIDefinitionPanel';
import Sidebar from './Components/SideBar';
import MapOverlayPanel from './Components/MapOverlayPanel';
import { mapInstance } from './Components/MapCanvas';
import MapToolPanel from './Components/MapToolPanel';

// Optional: Error boundary to catch runtime issues
import React from 'react';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2 style={{ padding: '20px', color: 'red' }}>Something went wrong. Please refresh the page.</h2>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        {/* Full-screen map behind everything */}
<MapCanvas />
<MapOverlayPanel mapInstance={mapInstance} /> {/* ✅ Pass the prop */}
       <MapToolPanel />
        <Sidebar />
        {/* Floating UI panels */}
        <Routes>
          <Route path="/" element={<DefineAreaPanel />} />
          <Route path="/aoi-definition" element={<AOIDefinitionPanel />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
