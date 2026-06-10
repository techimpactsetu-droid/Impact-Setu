import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, role, portfolio, coverLetter } = body;

    if (!name || !email || !role || !coverLetter) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Email to Site Admin
    const adminMailOptions = {
      from: `"ImpactSetu Careers" <${process.env.SMTP_USER}>`,
      to: "info.impactsetu@gmail.com",
      subject: `New Job Application: ${role} from ${name}`,
      html: `
        <h2>New Job Application for ${role}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Role Applied For:</strong> ${role}</p>
        <p><strong>Portfolio Link:</strong> ${portfolio ? `<a href="${portfolio}">${portfolio}</a>` : "N/A"}</p>
        <br/>
        <h3>Cover Letter / Intro:</h3>
        <p>${coverLetter.replace(/\n/g, "<br/>")}</p>
      `,
    };

    // 2. Auto-reply Email to the Applicant
    const applicantMailOptions = {
      from: `"ImpactSetu Careers" <info.impactsetu@gmail.com>`,
      to: email,
      subject: `Application Received: ${role} at ImpactSetu`,
      html: `
        <div style="font-family: sans-serif; color: #2C1E15; line-height: 1.6;">
          <h2 style="color: #4E3629;">Hello ${name},</h2>
          <p>Thank you for applying for the <strong>${role}</strong> position at ImpactSetu!</p>
          <p>We have successfully received your application and cover letter. Our hiring team is currently reviewing your profile and will get back to you if your experience aligns with our current needs.</p>
          
          <p>Due to the high volume of applications, it may take us up to a week to respond, but we sincerely appreciate your interest in building the bridge with us.</p>
          <br/>
          <p>Best regards,<br/><strong>The ImpactSetu Hiring Team</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(applicantMailOptions);

    return NextResponse.json({ success: true, message: "Application submitted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error sending careers email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
