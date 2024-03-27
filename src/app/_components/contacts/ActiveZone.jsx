export default function ActiveZone({
    name,
    email,
    mobile,
    message,
    city,
}) {

    let url = new URL('https://us-central1-vasilkoffcom-1532682115746.cloudfunctions.net/app');
    url.searchParams.set('name', name); 
    url.searchParams.set('email', email); 
    url.searchParams.set('message', message); 
    url.searchParams.set('city', city); 
    url.searchParams.set('mobile', mobile); 
    url.searchParams.set('key', 'EIxix5FQQvbskDjOFkKW');
    return (
        
        <iframe src={url} style={{height:"296px",width:"100%"}} />
        
    );
}