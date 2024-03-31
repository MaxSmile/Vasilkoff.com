import { ITimezoneOption } from 'react-timezone-select';

// Calculate timezone offset
export const getOffset = (timeZone: string, date: Date = new Date()): number => {
    const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(date.toLocaleString('en-US', { timeZone }));
    return (tzDate.getTime() - utcDate.getTime()) / (60000 * 60);
};

export const getTimeZoneAbbreviated = (date: Date): string => {
    const match = date.toString().match(/\((.+)\)/);
    const timeZoneString = match ? match[1] : "";
    return timeZoneString.includes(" ")
        ? timeZoneString.split(" ").map((word) => word[0]).join("")
        : timeZoneString;
};

// Get timezone Label
export const getTimeZoneLabel = (timeZone: string, date: Date = new Date()): string => {
    const localString = date.toLocaleTimeString('en-us', { timeZone, hour12: false, timeZoneName: 'shortGeneric' });
    const match = localString.match(/(?<=\d{2}:\d{2}:\d{2}\s).*$/);
    const timeZoneString = match ? match[0] : "Etc";
    //console.log("timeZoneString", match, localString);
    return timeZoneString;
};

// Convert timezone string and city name to ITimezoneOption
export function timezoneStringToITimezoneOption(timezoneString: string, cityName: string): ITimezoneOption {
    return {
        value: timezoneString,
        label: cityName,
        abbrev: getTimeZoneLabel(timezoneString),
        altName: timezoneString,
        offset: getOffset(timezoneString)
    };
}


const myTime = new Date();
export const myTimezoneOption: ITimezoneOption = {

    value: Intl.DateTimeFormat().resolvedOptions().timeZone,
    label: Intl.DateTimeFormat().resolvedOptions().timeZone,
    abbrev: getTimeZoneAbbreviated(myTime),
    // Use 'timeZoneName' option from 'resolvedOptions'
    altName: Intl.DateTimeFormat(undefined, { timeZoneName: 'long' }).resolvedOptions().timeZoneName,
    offset: -myTime.getTimezoneOffset() / 60.0
};
