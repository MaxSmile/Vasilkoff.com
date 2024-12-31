// app/_components/contacts/ActiveZone.jsx
import { useEffect, useState } from "react";

export default function ActiveZone({ name, email, mobile, message, city }) {
  const brevoApiKey = process.env.BREVO;
  const [status, setStatus] = useState("loading"); // Status can be 'loading', 'success', or 'error'
  const [errorMessage, setErrorMessage] = useState(""); // Detailed error message, if any

  useEffect(() => {
    const sendEmail = async () => {
      if (!brevoApiKey) {
        console.error("Brevo API key is not set in the environment variables.");
        setStatus("error");
        setErrorMessage("Internal configuration error. Please contact support.");
        return;
      }

      const emailData = {
        sender: {
          name: "Anastasia Bot",
          email: "team@2ul.top",
        },
        to: [
          {
            email: "team@vasilkoff.com",
            name: "Vasilkoff team",
          },
        ],
        subject: "New Contact Form Submission",
        htmlContent: `
          <html>
            <head></head>
            <body>
              <p>Hello,</p>
              <p>You have a new contact form submission:</p>
              <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Mobile:</strong> ${mobile}</li>
                <li><strong>City:</strong> ${city}</li>
                <li><strong>Message:</strong> ${message}</li>
              </ul>
              <p>Best regards,</p>
              <p>Your Website</p>
            </body>
          </html>
        `,
      };

      try {
        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            accept: "application/json",
            "api-key": brevoApiKey,
            "content-type": "application/json",
          },
          body: JSON.stringify(emailData),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Failed to send email:", response.status, errorText);
          setStatus("error");
          setErrorMessage(`Failed to send email. Server responded with: ${response.status}`);
        } else {
          console.log("Email sent successfully!");
          setStatus("success");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setStatus("error");
        setErrorMessage("An unexpected error occurred. Please try again later.");
      }
    };

    sendEmail();
  }, [name, email, mobile, message, city, brevoApiKey]);

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
          Sorry, there was an error sending your message. {errorMessage}
        </p>
      )}
    </div>
  );
}
