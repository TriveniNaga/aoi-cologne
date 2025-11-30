// src/Components/AOIDropdown.tsx

interface AOIDropdownProps {
  onSelect: (cityName: string) => void;
}

export default function AOIDropdown({ onSelect }: AOIDropdownProps) {
  const options = [
    'Cologne',
    'City Proper',
    'Inner City / Downtown',
    'Districts / Boroughs',
    'Neighborhoods / Quarters',
    'Metropolitan Area',
    'Suburbs / Periphery Towns',
    'Greater Region / Administrative Region',
    'Functional Use Zones',
  ];

  return (
    <div
      className="absolute z-50"
      style={{
        width: '227.27px',
        height: '240.15px',
        top: '180px',
        left: '21.17px',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        border: '1px solid rgba(0, 0, 0, 0.18)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '12px',
        fontFamily: 'Manrope, sans-serif',
        fontSize: '16px',
        fontWeight: 200,
        lineHeight: '150%',
        letterSpacing: '-2.3%',
        color: '#000000',
        overflowY: 'auto',
      }}
    >
      <ul className="space-y-2">
        {options.map((opt) => (
          <li
            key={opt}
            className="cursor-pointer hover:bg-gray-200 px-2 py-1 rounded"
            onMouseDown={() => onSelect(opt)} // use onMouseDown so blur doesn't cancel click
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
}
