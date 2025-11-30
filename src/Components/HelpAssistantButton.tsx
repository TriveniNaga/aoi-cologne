// src/Components/HelpAssistantButton.tsx

export default function HelpAssistantButton() {
  return (
    <>
      {/* Main Help Button */}
      <button
        className="absolute flex items-center justify-center text-[18px] font-semibold text-gray-800"
        style={{
          width: '46.0571403503418px',
          height: '44.777774810791016px',
          top: '821px',
          left: '1367px',
          backgroundColor: '#F5EEE0',
          borderRadius: '9.09px',
          boxShadow: '0px 1.82px 1.82px 0px #00000040',
          transform: 'rotate(0deg)',
          opacity: 1,
          cursor: 'pointer',
        }}
        title="Help Assistant"
      >
        ❔
      </button>

      {/* Extended Panel */}
      <div
        className="absolute"
        style={{
          width: '48px',
          height: '106px',
          top: '876px',
          left: '1365.31px',
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          boxShadow: '0px 4px 4px 0px #00000040',
          transform: 'rotate(0deg)',
          opacity: 1,
        }}
      >
        {/* Nested Action Stack */}
        <div
          className="flex flex-col items-center"
          style={{
            width: '26px',
            height: '89px',
            top: '13px',
            left: '11px',
            position: 'absolute',
            gap: '5px',
          }}
        >
          {/* Placeholder icons or actions */}
          <div className="w-[20px] h-[20px] bg-gray-300 rounded-full" />
          <div className="w-[20px] h-[20px] bg-gray-300 rounded-full" />
          <div className="w-[20px] h-[20px] bg-gray-300 rounded-full" />
        </div>
      </div>
    </>
  );
}
