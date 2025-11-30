import React from 'react';

const FullScreenOverlay: React.FC = () => {
  return (
    <div
      className="absolute w-[1440px] h-[1023px] top-[-1px] left-[-1px] bg-[#F1EEE8] opacity-100 rotate-0 z-[999]"
      data-testid="full-screen-overlay"
    />
  );
};

export default FullScreenOverlay;
