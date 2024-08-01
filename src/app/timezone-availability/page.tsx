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
<p className="mb-5 text-xl">Select time zones to visualize team availability and find the best meeting times.</p>
<hr/>
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

<hr/>
                <div id='web-app-container'>
                    <ResponsiveTimeTable />
                </div>

                <Legend hourSettings={hourSettings as HourSettings} />

                <OtherServicesAndTools exceptionLink="/timezone-availability" />
            </Container>
        </main>
    );
}

export default TimezoneAvailabilityPage;
