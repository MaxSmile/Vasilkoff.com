// src/app/_components/Tabs.jsx
"use client";
import { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className="flex justify-center mb-8">
        {tabs.map(tab => (
          <button
            key={tab.label}
            className={`px-4 py-2 text-lg font-bold ${activeTab === tab.label ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-8">
        {tabs.map(tab => (
           <div id={tab.id}  className={activeTab === tab.label ? 'block' : 'hidden'} key={tab.label}>{tab.content}</div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
