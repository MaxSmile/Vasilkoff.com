// src/app/_components/timezones/Legend.tsx
import React from 'react';
import { HourSettings } from "@/interfaces/types";
import {
    defaultHoursColorClass, earlyMorningHoursColorClass, lateEveningHoursColorClass, sleepingHoursColorClass, workingHoursColorClass
} from './TimeCell';

interface LegendProps {
    hourSettings: HourSettings;
}

const Legend: React.FC<LegendProps> = ({ hourSettings }) => {
    return (
        <div id="legend-container" className="mt-8">
            <h2 className="text-lg font-semibold">Legend</h2>
            <div className={`flex items-center mt-2 bg-green-400 ${workingHoursColorClass}`}>
                <div className="w-4 h-4 mr-2"></div>
                <span className="text-sm">Working Hours ({hourSettings.workingHours.start}:00 - {hourSettings.workingHours.end}:00)</span>
            </div>
            <div className={`flex items-center mt-1 ${earlyMorningHoursColorClass}`}>
                <div className="w-4 h-4 mr-2"></div>
                <span className="text-sm">Morning Hours ({hourSettings.morning.start}:00 - {hourSettings.morning.end}:00)</span>
            </div>
            <div className={`flex items-center mt-1 ${lateEveningHoursColorClass}`}>
                <div className="w-4 h-4 mr-2"></div>
                <span className="text-sm">Evening Hours ({hourSettings.evening.start}:00 - {hourSettings.evening.end}:00)</span>
            </div>
            <div className={`flex items-center mt-1 ${sleepingHoursColorClass}`}>
                <div className="w-4 h-4 mr-2"></div>
                <span className="text-sm">Sleeping Hours ({hourSettings.sleeping.start}:00 - {hourSettings.sleeping.end}:00)</span>
            </div>
            <div className={`flex items-center mt-1 ${defaultHoursColorClass}`}>
                <div className="w-4 h-4 mr-2"></div>
                <span className="text-sm">Outside Typical Hours</span>
            </div>
        </div>
    );
};

export default Legend;
