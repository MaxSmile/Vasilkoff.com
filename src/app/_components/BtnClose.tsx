// src/app/_components/BtnClose.tsx
import React from 'react';
import MenuIconClose from './MenuIconClose';

interface BtnCloseProps {
  onClose: () => void;
  className?: string;
}

const BtnClose: React.FC<BtnCloseProps> = ({ onClose, className = '' }) => {
  return (
    <button onClick={onClose} className={`rounded-full bg-primary p-2 w-10 h-10 ${className} `} >
        <MenuIconClose />
    </button>
  );
}

export default BtnClose;
