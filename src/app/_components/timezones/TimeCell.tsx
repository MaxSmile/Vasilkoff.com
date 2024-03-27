import React from 'react';
import { ITimezoneOption } from "react-timezone-select";
import {
    workingHoursColorClass, 
    sleepingHoursColorClass,
    lateEveningHoursColorClass,
    hourSettings,
    defaultHoursColorClass

} from "@/lib/constants";

interface TimeCellProps {
    hour: number;
    timezone: ITimezoneOption;
}

const TimeCell: React.FC<TimeCellProps> = ({ hour, timezone }) => {
    const localHour = (24 + hour + (timezone.offset || 0)) % 24;
    const currentTime = new Date(new Date().toLocaleString("en-US", {timeZone: timezone.value}));
    const currentHour = currentTime.getHours();
    const isCurrentTime = Math.floor(localHour) === currentHour;

    

    const getColorForHour = (): string => {
        if (localHour >= hourSettings.workingHours.start && localHour < hourSettings.workingHours.end) {
            return workingHoursColorClass;
        } else if ((localHour >= hourSettings.evening.start && localHour < hourSettings.evening.end) || (localHour >= hourSettings.morning.start && localHour < hourSettings.workingHours.start)) {
            return lateEveningHoursColorClass; 
            
        } else if (localHour >= hourSettings.sleeping.start || localHour <= hourSettings.sleeping.end) {
            return sleepingHoursColorClass;
        } else {
            return defaultHoursColorClass;
        }
    };

  
    const currentTimeClass = isCurrentTime ? "border-l border-r border-gray-800 bg-opacity-40" : "";

    
    const formatMinutes = (minutes: number) => minutes.toString().padStart(2, '0');
    
    const timeValue = !isCurrentTime ? (
        `${Math.floor(localHour)}:${formatMinutes((localHour - Math.floor(localHour)) * 60)}`
        ) : (
        `${currentTime.getHours()}:${formatMinutes(currentTime.getMinutes())}`
    );

    return (
        <td className={`${getColorForHour()} ${currentTimeClass} text-xs text-gray-700 text-center p-1`}>
            {timeValue}
        </td>
    );
}

export default TimeCell;
