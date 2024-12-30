// app/_components/contacts/ActiveZone.jsx
import { useEffect } from "react";

export default function ActiveZone({
    name,
    email,
    mobile,
    message,
    city,
}) {
    const brevoApiKey = process.env.BREVO;
    let url = new URL('https://us-central1-vasilkoffcom-1532682115746.cloudfunctions.net/app');
    url.searchParams.set('name', name); 
    url.searchParams.set('email', email); 
    url.searchParams.set('message', message); 
    url.searchParams.set('city', city); 
    url.searchParams.set('mobile', mobile); 
    url.searchParams.set('key', 'EIxix5FQQvbskDjOFkKW');

    
  useEffect(() => {
    const sendEmail = async () => {
      if (!brevoApiKey) {
        console.error("Brevo API key is not set in the environment variables.");
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
          console.error("Failed to send email:", response.status, await response.text());
        } else {
          console.log("Email sent successfully!");
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
    };

    sendEmail();
  }, [name, email, mobile, message, city, brevoApiKey]);

   

    return (
        
        <iframe src={url} style={{height:"296px",width:"100%"}} />
        
    );
}