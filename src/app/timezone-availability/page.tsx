"use client";
import Head from 'next/head';
import Container from '../_components/Container';
import OtherServicesAndTools from '../_components/OtherServicesAndTools';
import TimeTable from '../_components/timezones/TimeTable';

import {
    workingHoursColorClass,
    sleepingHoursColorClass,
    lateEveningHoursColorClass,
    earlyMorningHoursColorClass,
    defaultHoursColorClass,
    hourSettings
} from "@/lib/constants";

const TimezoneAvailabilityPage = () => {
    return (
        <main>
            <Head>
                <title>Timezone Availability - Vasilkoff</title>
                <meta name="description" content="Visualize team availability across different time zones." />
            </Head>

            <Container className="py-20">
                <h1 className="mb-5 text-2xl font-bold">Timezone Availability</h1>
                <p className="mb-5">Select time zones to visualize team availability and find the best meeting times.</p>

                <div id='web-app-container'>
                    <TimeTable />
                </div>

                {/* Legend Section */}
                <div id="legend-container" className="mt-8">
                    <h2 className="text-lg font-semibold">Legend</h2>
                    <div className={`flex items-center mt-2 ${workingHoursColorClass}`}>
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

                <OtherServicesAndTools exceptionLink="/timezone-availability" />
            </Container>
        </main>
    );
}

export default TimezoneAvailabilityPage;
