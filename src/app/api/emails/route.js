// app/api/email/route.js

import { brevoApiKey } from "@/lib/constants";
import { NextResponse } from "next/server";
const brevo = require("@getbrevo/brevo");

export async function GET(request) {
  const apiKey = "xkeysib-" + brevoApiKey;

  if (!brevoApiKey) {
    return NextResponse.json(
      { error: "Server configuration error: missing API key." },
      { status: 500 }
    );
  }

  try {
    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name") || "N/A";
    const email = searchParams.get("email") || "N/A";
    const mobile = searchParams.get("mobile") || "N/A";
    const message = searchParams.get("message") || "N/A";
    const city = searchParams.get("city") || "N/A";

    // Initialize the Brevo client
    const apiInstance = new brevo.TransactionalEmailsApi();
    const authentication = apiInstance.authentications["apiKey"];
    authentication.apiKey = apiKey;

    // Set up the email content with inline template
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = "New Contact Form Submission";
    sendSmtpEmail.htmlContent = `
      <html>
        <body>
          <h1>New Contact Submission</h1>
          <p>You have a new contact form submission:</p>
          <ul>
            <li><strong>Name:</strong> {{params.name}}</li>
            <li><strong>Email:</strong> {{params.email}}</li>
            <li><strong>Mobile:</strong> {{params.mobile}}</li>
            <li><strong>City:</strong> {{params.city}}</li>
            <li><strong>Message:</strong> {{params.message}}</li>
          </ul>
          {{test}}
        </body>
      </html>
    `;
    sendSmtpEmail.sender = { name: "Contact Bot", email: "team@2ul.top" };
    sendSmtpEmail.to = [{ email: "team@vasilkoff.com", name: "Vasilkoff Team" }];
    sendSmtpEmail.replyTo = { email: "team@2ul.top", name: "Support" };
    sendSmtpEmail.params = {
      name,
      email,
      mobile,
      city,
      message,
      test:JSON.stringify(process.env)
    };

    // Send the email
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);

    // Return success response
    return NextResponse.json(
      {
        message: "Email sent successfully!",
        data: data.response.body,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
