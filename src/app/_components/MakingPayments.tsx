// src/app/_components/RequestedInvoice.tsx
"use client";
import React from 'react';

export default function RequestInvoiceForm() {
    // Handle form submission
    const handleSubmit = (event:any) => {
        event.preventDefault();
        // TODO: Add form submission logic
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 text-sm font-bold mb-2">
                    Service Required
                </label>
                <input 
                    type="text" 
                    id="service" 
                    name="service"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter the service you need an invoice for"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="details" className="block text-gray-700 text-sm font-bold mb-2">
                    Additional Details
                </label>
                <textarea 
                    id="details" 
                    name="details"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Any specific instructions or additional details"
                ></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button 
                    type="submit" 
                    className="btn"
                >
                    Request Invoice
                </button>
            </div>
        </form>
    );
}
