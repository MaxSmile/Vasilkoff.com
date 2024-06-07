// src/app/_components/timezones/DesktopTimeTable.tsx
import React from 'react';
import { ITimezone } from 'react-timezone-select';
import BaseTimeTable from './BaseTimeTable';
import TimeCell from "./TimeCell";
import IconMinus from "../IconMinus";

const DesktopTimeTable = () => {
    const renderTable = (selectedTimezones: ITimezone[], hoursTitles: number[], removeTimezone: (index: number) => void) => (
        <table className="table-auto w-full mt-4">
            <thead className="border-b border-gray-800">
                <tr>
                    <th>Time Zone</th>
                    <th colSpan={hoursTitles.length}>Hours</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {selectedTimezones.map((timezone, tzIndex) => {
                    if (typeof timezone === 'object' && timezone.offset !== undefined) {
                        const gmtString = timezone.offset < 0 ? "GMT" + timezone.offset : "GMT+" + timezone.offset;
                        return (
                            <tr key={tzIndex}>
                                <td className="font-bold text-gray-700 text-center text-sm border-r border-b border-gray-800" title={timezone.abbrev}>
                                    {gmtString}
                                    <div className="text-gray-600 text-xs truncate font-normal max-w-[150px] overflow-hidden">{timezone.label}</div>
                                </td>
                                {hoursTitles.map(hour => (
                                    <TimeCell key={`${tzIndex}-${hour}`} hour={hour} timezone={timezone} />
                                ))}
                                <td className="border-l border-gray-800 text-center">
                                    <button onClick={() => removeTimezone(tzIndex)} className="text-primary">
                                        <IconMinus />
                                    </button>
                                </td>
                            </tr>
                        );
                    } else {
                        return (
                            <tr key={`invalid-${tzIndex}`}>
                                <td colSpan={hoursTitles.length + 2}>{timezone as string} is invalid</td>
                            </tr>
                        );
                    }
                })}
            </tbody>
        </table>
    );

    return <BaseTimeTable renderTable={renderTable} />;
};

export default DesktopTimeTable;
