import { PropsWithChildren, useEffect } from 'react';
import ReactGA from 'react-ga4';

import { useRouter } from 'next/router';

ReactGA.initialize([{
  "trackingId":"G-9WSLDWGM8P",
}]);



function App({ children }: PropsWithChildren) {
    
    const router = useRouter();


    useEffect(() => {

        //track('G-9WSLDWGM8P');
        const handleRouteChange = (url: any) => {
            ReactGA.send({ hitType: "pageview", page: url});
            //track('G-9WSLDWGM8P');
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
