// src/app/_components/timezones/ResponsiveTimeTable.tsx
import React, { useState, useEffect } from 'react';
import DesktopTimeTable from './DesktopTimeTable';
import MobileTimeTable from './MobileTimeTable';

const ResponsiveTimeTable = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        console.log("window.innerWidth", window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile ? <MobileTimeTable /> : <DesktopTimeTable />;
};

export default ResponsiveTimeTable;
