// src/app/_components/BugReportForm.js
"use client";

import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";

// Reusable Alert Component
const Alert = ({ type, message, onClose }) => {
    const bgColor = type === "success" ? "bg-green-200" : "bg-red-200";

    return (
        <div className={`text-center ${bgColor} rounded-md max-w-2xl mx-auto`}>
            <button
                onClick={onClose}
                className="text-primary font-bold text-xl float-right mr-3"
            >
                &times;
            </button>
            <div className="mt-4 p-8 text-lg">{message}</div>
        </div>
    );
};

const BugReportForm = () => {
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error', or null
    const [errorMessage, setErrorMessage] = useState(""); // To show detailed error messages

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Set loading status
        setStatus("loading");

        // Collect form data
        const name = event.target.name.value;
        const email = event.target.email.value;
        const mobile = event.target.mobile.value; 
        const description = event.target.description.value;

        // Prepare API request
        try {
            const response = await fetch(
                `/api/emails?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&mobile=${encodeURIComponent(mobile)}&message=${encodeURIComponent(description)}&city=BUGREPORT`,
                { method: "GET" }
            );

            if (response.ok) {
                setStatus("success");
            } else {
                const errorData = await response.json();
                setStatus("error");
                setErrorMessage(errorData.error || "Something went wrong!");
            }
        } catch (error) {
            console.error("Error submitting the bug report:", error);
            setStatus("error");
            setErrorMessage("An unexpected error occurred.");
        }
    };

    const resetForm = () => {
        setStatus(null);
        setErrorMessage("");
    };

    return (
        <div className="py-16" id="report">
            <h2 className="text-3xl font-extrabold text-center mb-8">Report a Bug</h2>

            {status === "loading" && (
                <div className="flex justify-center items-center">
                    <FaSpinner className="text-secondary animate-spin" size={50} />
                </div>
            )}

            {status === null && (
                <form className="max-w-2xl mx-auto space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                            Phone Number (Optional)
                        </label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-2 rounded-md">
                        Submit
                    </button>
                </form>
            )}

            {status === "success" && (
                <Alert
                    type="success"
                    message="Bug report submitted successfully!"
                    onClose={resetForm}
                />
            )}

            {status === "error" && (
                <Alert
                    type="error"
                    message={`Error: ${errorMessage}`}
                    onClose={resetForm}
                />
            )}
        </div>
    );
};

export default BugReportForm;
