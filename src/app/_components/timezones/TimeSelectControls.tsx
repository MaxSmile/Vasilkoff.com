// src/app/_components/timezones/TimeSelectControls.tsx
"use client";
import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import TimezoneSelect, { ITimezone } from 'react-timezone-select';
import { debounce } from 'lodash';
import { myTimezoneOption, timezoneStringToITimezoneOption } from './TimzoneOptions';
import cities from './cities';

interface TimeSelectControlsProps {
  addTimezone: (timezone: ITimezone) => void;
  setSelectedTimezones: React.Dispatch<React.SetStateAction<ITimezone[]>>;
}

export default function TimeSelectControls({
  addTimezone,
  setSelectedTimezones
}: TimeSelectControlsProps) {
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(myTimezoneOption);
  const [selectedCity, setSelectedCity] = useState<any>(null);

  const loadCityOptions = (inputValue: string, callback: (options: any[]) => void) => {
    let filteredOptions = [];
    for (let city of cities) {
      if (city.label.toLowerCase().includes(inputValue.toLowerCase())) {
        filteredOptions.push(city);
        if (filteredOptions.length === 20) break; 
      }
    }
    callback(filteredOptions);
  };

  const debouncedLoadOptions = debounce(loadCityOptions, 300);

  const handleAddCityAsTimezone = () => {
    if (selectedCity) {
      const timezoneOption = timezoneStringToITimezoneOption(selectedCity.value, selectedCity.label);
      addTimezone(timezoneOption);
    }
  };

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
      <div>
        Select time zone:<br />
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
        <button onClick={() => addTimezone(selectedTimezone)} className="btn w-full mt-4">Add Timezone</button>
      </div>
      
      <div className="flex items-center gap-4">
        <div className='w-fit'>OR</div>
        <div className="w-full ml-1">
        Start typing city name:<br />
        <AsyncSelect
          loadOptions={debouncedLoadOptions}
          defaultOptions
          onChange={setSelectedCity}
        />
        <button onClick={handleAddCityAsTimezone} className="btn w-full mt-4">Add City</button>
        </div>
        
      </div>
      
      <div className="col-span-2">
        <button onClick={() => setSelectedTimezones([])} className="btn w-full mt-4">Clear All</button>
      </div>
    </div>
  );
  
}
