import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, orgName, service, budget, message, formType } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const isConsultation = formType === "consultation";
    const subjectPrefix = isConsultation ? "New Consultation Booking" : "New Proposal Request";

    // 1. Email to Site Admin (info.impactsetu@gmail.com)
    const adminMailOptions = {
      from: `"ImpactSetu Website" <${process.env.SMTP_USER}>`,
      to: "info.impactsetu@gmail.com",
      subject: `${subjectPrefix} from ${name}`,
      html: `
        <h2>${subjectPrefix}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Organization:</strong> ${orgName || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    // 2. Auto-reply Email to the User
    const userMailOptions = {
      from: `"ImpactSetu" <info.impactsetu@gmail.com>`,
      to: email,
      subject: isConsultation 
        ? "We've received your consultation request - ImpactSetu" 
        : "We've received your proposal request - ImpactSetu",
      html: `
        <div style="font-family: sans-serif; color: #2C1E15; line-height: 1.6;">
          <h2 style="color: #4E3629;">Hello ${name},</h2>
          <p>Thank you for reaching out to <strong>ImpactSetu</strong>!</p>
          <p>We have successfully received your ${isConsultation ? "consultation" : "proposal"} request. Our team is currently reviewing your details and we will get back to you within 24-48 hours to discuss the next steps.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #B58A63; margin: 20px 0;">
            <p style="margin: 0;"><strong>Service Inquiry:</strong> ${service || "General Inquiry"}</p>
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin-top: 5px; font-style: italic;">"${message}"</p>
          </div>
          
          <p>If you have any urgent questions, feel free to reply directly to this email or call us at +91 7703896811.</p>
          <br/>
          <p>Best regards,<br/><strong>The ImpactSetu Team</strong></p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true, message: "Emails sent successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
