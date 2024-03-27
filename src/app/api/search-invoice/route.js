// src/app/api/search-invoice/route.ts

export async function POST(req) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const { invoiceNumber, invoiceDate, email } = await req.json();
    
    try {
        let searchQuery = '';
        if (invoiceNumber) {
            searchQuery = `number:'${invoiceNumber}'`;
        } else if (invoiceDate && email) {
            searchQuery = `due_date:'${invoiceDate}' AND customer_email:'${email}'`;
        } else {
            throw new Error('Invalid search parameters.');
        }

        const invoices = await stripe.invoices.search({ query: searchQuery });

        if (invoices.data.length > 0) {
            // Assuming we want to return all matching invoices, not just the first one
            return new Response(JSON.stringify({ invoices: invoices.data }), {
                headers: { 'Content-Type': 'application/json' },
                status: 200
            });
        } else {
            return new Response(JSON.stringify({ message: 'No invoices found with the provided details.' }), {
                headers: { 'Content-Type': 'application/json' },
                status: 404
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message || 'Error searching for invoices.' }), {
            headers: { 'Content-Type': 'application/json' },
            status: error.status || 500
        });
    }
}
