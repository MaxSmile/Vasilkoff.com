// app/_components/contacts/ActiveZone.jsx
import { useEffect, useState } from "react";

export default function ActiveZone({ name, email, mobile, message, city }) {
  const [status, setStatus] = useState("loading"); // Status: 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState(""); // Detailed error message

  useEffect(() => {
    const sendEmail = async () => {
      try {
        // Construct the query parameters
        const params = new URLSearchParams({
          name,
          email,
          mobile,
          message,
          city,
        });

        // Send the GET request
        const response = await fetch(`/api/emails?${params.toString()}`, {
          method: "GET",
        });

        if (!response.ok) {
          const errorData = await response.json();
          setStatus("error");
          setErrorMessage(errorData.error || "Failed to send email.");
        } else {
          setStatus("success");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setStatus("error");
        setErrorMessage("An unexpected error occurred. Please try again later.");
      }
    };

    sendEmail();
  }, [name, email, mobile, message, city]);

  return (
    <div className="status-container">
      {status === "loading" && (
        <p className="text-gray-500">Sending your message, please wait...</p>
      )}
      {status === "success" && (
        <p className="text-green-500">Thank you! Your message has been sent successfully.</p>
      )}
      {status === "error" && (
        <p className="text-red-500">
          Sorry, there was an error sending your message. <br />
          <strong>Details:</strong> {errorMessage}
        </p>
      )}
    </div>
  );
}
