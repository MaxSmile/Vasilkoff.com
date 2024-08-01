// src/app/_components/timezones/BaseTimeTable.tsx
import React, { useState, useEffect } from 'react';
import { ITimezone } from 'react-timezone-select';
import TimeSelectControls from "./TimeSelectControls";
import { myTimezoneOption } from "./TimzoneOptions";

declare global {
    interface Window {
        interval?: number;
    }
}

interface BaseTimeTableProps {
    renderTable: (selectedTimezones: ITimezone[], hoursTitles: number[], removeTimezone: (index: number) => void) => JSX.Element;
}

const BaseTimeTable: React.FC<BaseTimeTableProps> = ({ renderTable }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
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
                localStorage.setItem("selectedTimezones", JSON.stringify(updatedTimezones));
                return updatedTimezones;
            });
        } else {
            alert('Time zone already included');
        }
    };

    const removeTimezone = (index: number) => {
        setSelectedTimezones((current) => {
            const newTimezones = current.filter((_, i) => i !== index);
            localStorage.setItem("selectedTimezones", JSON.stringify(newTimezones));
            return newTimezones;
        });
    };

    const shareTimezones = () => {
        let newUrl = "";
        if (typeof window !== "undefined") {
            const timezonesString = encodeURIComponent(JSON.stringify(selectedTimezones));
            newUrl = `${window.location.origin}${window.location.pathname}?timezones=${timezonesString}`;
        }
        return newUrl;
    };

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

        if (!window.interval) {
            window.interval = window.setInterval(() => {
                setCurrentTime(new Date());
            }, 60 * 1000);
        }

        return () => {
            if (window.interval) clearInterval(window.interval);
        };
    }, []);

    return (
        <div className="max-w-6xl mx-auto mb-8 border-b border-gray-200 py-4 overflow-x-auto">
            <TimeSelectControls addTimezone={addTimezone} setSelectedTimezones={setSelectedTimezones} />
            <div className="max-w-full overflow-x-auto p-2 mb-4">
                {renderTable(selectedTimezones, hoursTitles, removeTimezone)}
            </div>
            <p>Want to share your time zones table?</p>
            <button onClick={() => {
                navigator.clipboard.writeText(shareTimezones()).then(() => {
                    alert("Timezone URL copied to clipboard");
                }).catch((err) => {
                    alert("Could not copy the URL to clipboard");
                });
            }} className="text-primary  underline">Click to Copy the time zones table Share link</button>
            <p className="mt-4">Or copy the link text below</p>
            <div className="text-xs text-gray-400 break-all">{shareTimezones() as string}</div>
            <div className="text-xs mt-4">Your Local Time and Date: {currentTime.toLocaleTimeString()} {currentTime.toLocaleDateString()}</div>
        </div>
    );
};

export default BaseTimeTable;
