// src/Components/SymbolBlock.tsx

export default function SymbolBlock() {
  return (
    <div
      className="absolute flex items-center justify-center text-xl"
      style={{
        width: '44px',
        height: '44px',
        top: '91px',
        left: '13px',
        transform: 'rotate(0deg)',
        opacity: 1,
        backgroundColor: '#FFFFFF', // You can change this if needed
        borderRadius: '8px', // Optional: for rounded corners
        boxShadow: '0 1px 4px rgba(0,0,0,0.2)', // Optional: for subtle depth
      }}
    >
      🧭 {/* Replace with your exact symbol if different */}
    </div>
  );
}
