// src/app/timezone-availability/page.tsx

import Container from '../_components/Container';
import OtherServicesAndTools from '../_components/OtherServicesAndTools';
import Legend from '../_components/timezones/Legend';
import { BASE_URL, hourSettings } from "@/lib/constants";
import { HourSettings } from "@/interfaces/types";
import ResponsiveTimeTable from '../_components/timezones/ResponsiveTimeTable';
import { headers } from 'next/headers';

export async function generateMetadata() {
    const headersList = headers();
    const pathname = headersList.get("x-pathname") + "" + headersList.get("x-search");
    const canonicalUrl = `${BASE_URL}${pathname}`;
    return {
        title: `Timezone Availability - Vasilkoff`,
        description: `Visualize team availability across different time zones.`,
        openGraph: {
            images: [
                {
                    url: `${BASE_URL}/assets/images/timezones.webp`,
                    width: 1200,
                    height: 630,
                    alt: "Timezone Availability - Find the best meeting time for your team",
                },
            ],
        },
        creator: 'Maksym Vasylkov',
        publisher: 'Vasilkoff Ltd',
        metadataBase: new URL(BASE_URL),
        alternates: { canonical: canonicalUrl },
    }
}

const TimezoneAvailabilityPage = () => {
    return (
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
    );
}

export default TimezoneAvailabilityPage;
