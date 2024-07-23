// src/app/_components/timezones/MobileTimeTable.tsx
import React from 'react';
import { ITimezone } from 'react-timezone-select';
import BaseTimeTable from './BaseTimeTable';
import TimeCell from "./TimeCell";
import IconMinus from "../IconMinus";

const MobileTimeTable = () => {
    const renderTable = (selectedTimezones: ITimezone[], hoursTitles: number[], removeTimezone: (index: number) => void) => (
        <table className="table-auto w-full mt-4 border border-gray-800">
            <thead className="border border-gray-800">
                <tr id="titles">
                    {selectedTimezones.map((timezone, tzIndex) => {
                        if (timezone && typeof timezone === 'object' && 'offset' in timezone && 'label' in timezone) {
                            const gmtString = timezone.offset !== undefined && timezone.offset < 0 ? `GMT${timezone.offset}` : `GMT+${timezone.offset}`;
                            return (
                                <th key={tzIndex}  
                                style={{width: '!important'+(100 / selectedTimezones.length)+'%'}} 
                                className="font-bold text-gray-700 text-center text-sm border-r border-b border-gray-800 " title={timezone.abbrev}>
                                    <div className='pb-1'>{gmtString}</div>
                                    <div className="text-gray-600 text-xs font-normal" >{timezone.label}</div>
                                </th>
                            );
                        }
                        return null;
                    })}
                </tr>
            </thead>
            <tbody>
                {hoursTitles.map(hour => (
                    <tr key={hour}>
                        {selectedTimezones.map((timezone, tzIndex) => {
                            if (timezone && typeof timezone === 'object' && 'offset' in timezone && 'label' in timezone) {
                                return (
                                    <TimeCell key={`${tzIndex}-${hour}`} hour={hour} timezone={timezone} />
                                );
                            }
                            return null;
                        })}
                    </tr>
                ))}
                <tr id="actions">
                    {selectedTimezones.map((timezone, tzIndex) => {
                        return (<td key={tzIndex} className="border border-gray-800 text-center" 
                            style={{width: (100 / selectedTimezones.length)+'%'}} width={(100 / selectedTimezones.length)+'%'}>
                            <button onClick={() => removeTimezone(tzIndex)} className="text-primary">
                                <IconMinus />
                            </button>
                        </td>)
                    })}
                </tr>
            </tbody>
        </table>
    );

    return <BaseTimeTable renderTable={renderTable} />;
};

export default MobileTimeTable;
