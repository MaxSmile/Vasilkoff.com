import React from 'react';
import { ITimezoneOption } from "react-timezone-select";
import { hourSettings } from "@/lib/constants";


export const sleepingHoursColorClass = ' bg-red-400 ';
export const workingHoursColorClass = ' bg-green-400 ';
export const lateEveningHoursColorClass = "bg-yellow-500";
export const earlyMorningHoursColorClass = "bg-lime-200";
export const defaultHoursColorClass = "bg-stone-400";

interface TimeCellProps {
    hour: number;
    timezone: ITimezoneOption;
}

const TimeCell: React.FC<TimeCellProps> = ({ hour, timezone }) => {
    const localHour = (24 + hour + (timezone.offset || 0)) % 24;
    const currentTime = new Date(new Date().toLocaleString("en-US", {timeZone: timezone.value}));
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    let hourPlace = currentHour
    if(localHour>Math.floor(localHour)) {
        if(currentMinutes < 30) {
            hourPlace = (currentHour+23)%24;
        }
    }
    //console.log("localHour [currentHour hourPlace] currentMinutes timezone.offset", localHour, '[',currentHour, hourPlace,']', currentMinutes, timezone.offset);

    const isCurrentTime = Math.floor(localHour) === hourPlace;
    // console.log("isCurrentTime", isCurrentTime);
    

    const getColorForHour = (): string => {
        if (localHour >= hourSettings.workingHours.start && localHour < hourSettings.workingHours.end) {
            return workingHoursColorClass;
        } else if (localHour >= hourSettings.evening.start && localHour < hourSettings.evening.end) {
            return lateEveningHoursColorClass;
        } else if (localHour >= hourSettings.morning.start && localHour < hourSettings.workingHours.start) {
            return earlyMorningHoursColorClass; 
        } else if (localHour >= hourSettings.sleeping.start || localHour <= hourSettings.sleeping.end) {
            return sleepingHoursColorClass;
        } else {
            return defaultHoursColorClass;
        }
    };

  
    const currentTimeClass = isCurrentTime ? "border border-gray-800 bg-opacity-40" : "";

    
    const formatMinutes = (minutes: number) => minutes.toString().padStart(2, '0');
    
    const timeValue = !isCurrentTime ? (
        `${Math.floor(localHour)}:${formatMinutes((localHour - Math.floor(localHour)) * 60)}`
        ) : (
        `${currentTime.getHours()}:${formatMinutes(currentTime.getMinutes())}`
    );

    const styles = currentTimeClass + " text-xs text-gray-700 text-center p-1 " + getColorForHour();

    return (
        <td className={styles}>
            {timeValue}
        </td>
    );
}

export default TimeCell;
