import { PropsWithChildren, useEffect } from 'react';


import { useRouter } from 'next/router';
import { trackEvent } from '@phntms/next-gtm';

//import ReactGA from 'react-ga4';
// ReactGA.initialize([{
//   "trackingId":"G-9WSLDWGM8P",
// }]);




function App({ children }: PropsWithChildren) {
    
    const router = useRouter();


    useEffect(() => {
        const handleRouteChange = (url: any) => {
            //ReactGA.send({ hitType: "pageview", page: url});
            trackEvent({
              event: "pageview",
              data: { hitType: "pageview", page: url},
            });
          };
      
          // When the component is mounted, subscribe to router changes
          // and log those page views
          router.events.on('routeChangeComplete', handleRouteChange);
      
          // If the component is unmounted, unsubscribe from the event
          return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
          };
    }, [ router.events]);

    return <div className="App">{children}</div>;
}

App.displayName = 'App';
export default App;
