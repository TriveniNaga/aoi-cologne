import { useState } from 'react';
import VerticalSidebar from './VerticalSidebar';
import DefineAreaPanel from './DefineAreaPanel';
import AOIDefinitionPanel from './AOIDefinitionPanel';
import HelpAssistantButton from './HelpAssistantButton';
import MiniBlock from './MiniBlock';
import SymbolBlock from './SymbolBlock';
import SmallHighlightBlock from './SmallHighlightBlock';
import MapCanvas from './MapCanvas';
import ViewToggle from './ViewToggle';
import MapToolPanel from './MapToolPanel';

export default function LayoutShell() {
  const [showAOI, setShowAOI] = useState(false);
  const [initialQuery, setInitialQuery] = useState<string>('');

  return (
    <div
      className="relative"
      style={{
        width: '1440px',
        height: '1023px',
        backgroundColor: '#F1EEE8',
        overflow: 'hidden',
      }}
    >
      {/* Sidebar */}
      <VerticalSidebar />

      {/* Left Panel: Define or AOI */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
        {showAOI ? (
          <AOIDefinitionPanel initialQuery={initialQuery} />
        ) : (
          <DefineAreaPanel
            onEnter={(q) => {
              setInitialQuery(q);
              setShowAOI(true);
            }}
          />
        )}
      </div>

      {/* Right-aligned Map */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '480px', // width of left panel
          width: '960px',
          height: '1023px',
          zIndex: 1,
        }}
      >
        <MapCanvas />
      </div>

      {/* Floating UI blocks */}
      <MiniBlock />
      <SymbolBlock />
      <SmallHighlightBlock />
      <HelpAssistantButton />

      {/* Bottom-right toggle buttons */}
      <ViewToggle />

      {/* Right-side vertical tool panel */}
      <MapToolPanel />
    </div>
  );
}
