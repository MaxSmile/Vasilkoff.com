import React, { useEffect } from 'react';
import Head from 'next/head';

function CSE() {
    const cx = "a4466be8f630340db";

    const onLoad = () => {
        renderCSE();
    };

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
        <Head>
            <script
                src={`//www.google.com/cse/cse.js?cx=${cx}`}
                async
            />
        </Head>
        <div id="cseSearchResults" />

    </>

    );
}

export default CSE;
