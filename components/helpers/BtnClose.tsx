// components/helpers/BtnClose.tsx
import React from 'react';

interface BtnCloseProps {
  onClose: () => void;
  className?: string;
}

const BtnClose: React.FC<BtnCloseProps> = ({ onClose, className = '' }) => {
  return (
    <button onClick={onClose} className={`btn p-2 ${className} `} >
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
  );
}

export default BtnClose;
