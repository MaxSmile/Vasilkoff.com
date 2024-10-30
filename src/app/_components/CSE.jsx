"use client";
import React, { useEffect } from 'react';
import Script from 'next/script';

export default function CSE() {
    const cx = "a4466be8f630340db";

    const renderCSE = () => {
        const cse = google.search.cse;
        console.log("cse", cse);
        cse.element.render({
            div: 'cseSearchResults',
            tag: 'searchresults-only',
            attributes: {
                linkTarget: '_top',
            },
        });

    };


    useEffect(() => {
        window.__gcse = {
            parsetags: 'explicit',
            callback: function () {
                if (document.readyState == 'complete') {
                    renderCSE();
                } else {
                    google.setOnLoadCallback(renderCSE, true);
                }
            }
        };
    }, []);


    return (<>
        <Script
            src={`//www.google.com/cse/cse.js?cx=${cx}`}
            async
        />
        <div id="cseSearchResults" />

    </>

    );
}

