// src/app/timezone-availability/page.tsx
"use client";
import Head from 'next/head';
import Container from '../_components/Container';
import OtherServicesAndTools from '../_components/OtherServicesAndTools';
import TimeTable from '../_components/timezones/TimeTable';
import Legend from '../_components/timezones/Legend';
import { hourSettings } from "@/lib/constants";
import { HourSettings } from "@/interfaces/types";
import ResponsiveTimeTable from '../_components/timezones/ResponsiveTimeTable';

const TimezoneAvailabilityPage = () => {
    return (
        <>
            <Head>
                <title>Timezone Availability - Vasilkoff</title>
                <meta name="description" content="Visualize team availability across different time zones." />
            </Head>
            <main>
                <Container className="py-20">
                    <h1 className="mb-5 text-2xl font-bold">Timezone Availability</h1>
                    <p className="mb-5">Select time zones to visualize team availability and find the best meeting times.</p>

                    <div id='web-app-container'>
                        {/* <TimeTable /> */}
                        <ResponsiveTimeTable />
                    </div>

                    {/* Legend Section */}
                    <Legend hourSettings={hourSettings as HourSettings} />

                    <OtherServicesAndTools exceptionLink="/timezone-availability" />
                </Container>
            </main>
        </>
    );
}

export default TimezoneAvailabilityPage;
