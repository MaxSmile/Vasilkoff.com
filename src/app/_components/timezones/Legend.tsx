// src/app/_components/timezones/Legend.tsx
import React from 'react';
import { HourSettings } from "@/interfaces/types";
import {
    defaultHoursColorClass,
    earlyMorningHoursColorClass,
    lateEveningHoursColorClass,
    sleepingHoursColorClass,
    workingHoursColorClass
} from './TimeCell';

interface LegendProps {
    hourSettings: HourSettings;
}

const Legend: React.FC<LegendProps> = ({ hourSettings }) => {
    const legendItems = [
        
        {
            label: `Morning Hours (${hourSettings.morning.start}:00 - ${hourSettings.morning.end}:00)`,
            colorClass: earlyMorningHoursColorClass,
            description: "These hours are usually early in the morning when people are starting their day. Possible hours for meetings outside of business conversations."
        },
        {
            label: `Working Hours (${hourSettings.workingHours.start}:00 - ${hourSettings.workingHours.end}:00)`,
            colorClass: workingHoursColorClass,
            description: "These are the hours typically dedicated to work-related activities."
        },
        {
            label: `Evening Hours (${hourSettings.evening.start}:00 - ${hourSettings.evening.end}:00)`,
            colorClass: lateEveningHoursColorClass,
            description: "These hours are in the evening when people are winding down from the day. Possible hours for meetings outside of business conversations."
        },
        {
            label: `Sleeping Hours (${hourSettings.sleeping.start}:00 - ${hourSettings.sleeping.end}:00)`,
            colorClass: sleepingHoursColorClass,
            description: "These are the typical hours when people are asleep."
        },
        {
            label: "Outside Typical Hours",
            colorClass: defaultHoursColorClass,
            description: "These hours fall outside of the typical working, morning, evening, and sleeping hours."
        },
    ];

    return (
        <div id="legend-container" className="mt-8">
            <h2 className="text-lg font-semibold">Legend</h2>
            {legendItems.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center mt-2 space-y-2 md:space-y-0 md:space-x-4">
                    <div className={`flex h-5 p-4 items-center ${item.colorClass} w-80 min-w-80`}>
                        <span className="ml-5 text-sm font-medium">{item.label}</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-4">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Legend;
