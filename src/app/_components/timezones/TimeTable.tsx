"use client";
import { useEffect, useState } from "react";
import { ITimezone, ITimezoneOption } from 'react-timezone-select';
import TimeCell from "./TimeCell";
import TimeSelectControls from "./TimeSelectControls";
import IconMinus from "../IconMinus";
import { myTimezoneOption } from "./TimzoneOptions";

declare global {
    interface Window {
        interval?: number;
    }
}


export default function TimeTable() {
    const [currentTime, setCurrentTime] = useState(new Date());

    // Define the state with the correct type
    const [selectedTimezones, setSelectedTimezones] = useState<ITimezone[]>([myTimezoneOption]);

    const hoursTitles = Array.from({ length: 24 }, (_, i) => i);

    const addTimezone = (selectedTimezone: ITimezone) => {
        const isDuplicate = selectedTimezones.some(tz => {
            if (typeof tz === 'string' && typeof selectedTimezone === 'string') {
                return tz === selectedTimezone;
            } else if (typeof tz !== 'string' && typeof selectedTimezone !== 'string') {
                return tz.value === selectedTimezone.value;
            }
            return false;
        });

        if (!isDuplicate) {
            setSelectedTimezones(prev => {
                const updatedTimezones = [...prev, selectedTimezone];
                // Update localStorage right after updating the state
                localStorage.setItem("selectedTimezones", JSON.stringify(updatedTimezones));
                return updatedTimezones;
            });
        } else {
            alert('Time zone already included');
        }
    };




    const removeTimezone = (index: number) => {
        setSelectedTimezones((current) => current.filter((_, i) => i !== index));
    };

    const shareTimezones = () => {
        let newUrl = "";
        if (typeof window !== "undefined") {
            const timezonesString = encodeURIComponent(JSON.stringify(selectedTimezones));
            newUrl = `${window.location.origin}${window.location.pathname}?timezones=${timezonesString}`;
        }
        return newUrl;
    };


    // Effect to parse URL on load
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const timezonesParam = queryParams.get("timezones");

        if (timezonesParam) {

            try {
                const timezonesFromUrl = JSON.parse(decodeURIComponent(timezonesParam));
                setSelectedTimezones(timezonesFromUrl);
            } catch (error) {
                console.error("Error parsing timezones from URL", error);
            }
        } else {
            const storedTimezones = localStorage.getItem("selectedTimezones");
            if (storedTimezones) {
                setSelectedTimezones(JSON.parse(storedTimezones));
            }
        }

        // Initialize interval if it doesn't exist
        if (!window.interval) {
            window.interval = window.setInterval(() => {
                setCurrentTime(new Date());
            }, 60 * 1000);
        }

        // Cleanup interval on component unmount
        return () => {
            if (window.interval) clearInterval(window.interval);
        };
    }, []);

    return (
        <div className="max-w-6xl mx-auto mb-8 border-b border-gray-200 py-4 overflow-x-auto">
            <TimeSelectControls addTimezone={addTimezone} setSelectedTimezones={setSelectedTimezones} />
            <div className="max-w-full overflow-x-auto p-2">
                <table className="table-auto w-full mt-4">
                    <thead className="border-b border-gray-800">
                        <tr>
                            <th>Time Zone</th>
                            <th colSpan={hoursTitles.length}>Hours</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // Map over selectedTimezones
                            selectedTimezones.map((timezone, tzIndex) => {
                                if (typeof timezone === 'object' && timezone.offset != undefined) {
                                    const gmtString = timezone.offset < 0 ? "GMT" + timezone.offset : "GMT+" + timezone.offset;
                                    return (
                                        <tr key={tzIndex}>
                                            <td className="font-bold text-gray-700 text-center text-sm border-r border-b border-gray-800"
                                                title={timezone.abbrev}
                                            >{gmtString}<div className="text-gray-600 text-xs truncate font-normal max-w-[150px] overflow-hidden">{timezone.label}</div></td>
                                            {hoursTitles.map(hour => (
                                                <TimeCell key={`${tzIndex}-${hour}`} hour={hour} timezone={timezone} />
                                            ))}
                                            <td className="border-l border-gray-800 text-center">
                                                <button onClick={() => removeTimezone(tzIndex)}
                                                    className="text-primary"
                                                ><IconMinus /></button>
                                            </td>
                                        </tr>
                                    );
                                } else {
                                    // This branch wouldn't be executed if we correctly ensure timezone is always an ITimezoneOption
                                    return (
                                        <tr key={`invalid-${tzIndex}`}>
                                            <td colSpan={hoursTitles.length + 2}>{timezone as string} is invalid</td>
                                        </tr>
                                    );
                                }
                            })
                        }
                    </tbody>

                </table>
            </div>
            <button onClick={() => {
                navigator.clipboard.writeText(shareTimezones()).then(() => {
                    alert("Timezone URL copied to clipboard");
                }).catch((err) => {
                    alert("Could not copy the URL to clipboard");
                });

            }} className="text-primary mt-4 underline">Click to Copy the time zones table Share link</button>
            <div className="text-xs text-gray-400 break-all">{shareTimezones() as string}</div>
            <div className="text-xs">Current Local Time and Date: {currentTime.toLocaleTimeString()} {currentTime.toLocaleDateString()}</div>
        </div>
    );
}
