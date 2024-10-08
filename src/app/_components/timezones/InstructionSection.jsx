"use client";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import ToggleIcon from '../ToggleIcon';

export default function InstructionSection() {
    const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

    const toggleInstructions = () => {
        setIsInstructionsOpen(!isInstructionsOpen);
    };

    return (
        <div className="my-4">
            {/* Toggle Button for Instructions */}
            <button
                className="flex justify-between items-center w-full text-left my-2 p-2"
                onClick={toggleInstructions}
            >
                <h3 className="font-bold">
                    {isInstructionsOpen ? 'Hide Instructions' : 'Show Instructions'}
                </h3>
                <ToggleIcon isActive={isInstructionsOpen} />
            </button>

            {/* Instruction Section - AnimateHeight used here */}
            <AnimateHeight duration={300} height={isInstructionsOpen ? 'auto' : 0}>
                <div className="p-2">
                    <p className="mb-4">Follow these steps to use the Timezone Availability tool:</p>
                    <ol className="list-decimal list-inside mb-5">
                        <li className="mb-2">
                            <strong>Select a Time Zone:</strong>
                            <ul className="list-disc list-inside ml-4">
                                <li>Use the <em>Select time zone</em> dropdown menu to choose a specific time zone from the list. For example, you can select <em>Australia/Darwin</em>.</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <strong>Choose a City:</strong>
                            <ul className="list-disc list-inside ml-4">
                                <li>In the <em>Start typing city name</em> field, begin typing the name of your city. A dropdown menu will appear with matching city names. Select your city from the list, such as <em>Berlin, Germany</em>.</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <strong>Add Selected Time Zone or City:</strong>
                            <ul className="list-disc list-inside ml-4">
                                <li>After selecting the time zone or city, click the <strong>Add Timezone</strong> button to add it to the list below.</li>
                                <li>You can add multiple time zones and cities to compare their availabilities.</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <strong>Clear All Selections:</strong>
                            <ul className="list-disc list-inside ml-4">
                                <li>If you want to start over, click the <strong>Clear All</strong> button to remove all selected time zones and cities.</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <strong>Review Team Availability:</strong>
                            <ul className="list-disc list-inside ml-4">
                                <li>Once you have added the time zones and cities, you will see a table displaying the availability for each selection. The table highlights different times of the day, indicating working hours, morning hours, evening hours, sleeping hours, and hours outside typical availability.</li>
                            </ul>
                        </li>
                    </ol>
                    <p>Use this tool to find the best meeting times for your team based on their time zones and availability. This helps ensure that everyone can participate in the meetings without scheduling conflicts.</p>
                </div>
            </AnimateHeight>
        </div>
    );
}
