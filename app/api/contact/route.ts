import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Only send if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });

      await transporter.sendMail({
        from: `"SVM Website" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL || 'pannango464@gmail.com',
        replyTo: email,
        subject: `[SVM Enquiry] ${subject} — ${name}`,
        html: `
          <h2>New enquiry from website</h2>
          <table>
            <tr><td><b>Name:</b></td><td>${name}</td></tr>
            <tr><td><b>Email:</b></td><td>${email}</td></tr>
            <tr><td><b>Phone:</b></td><td>${phone || 'Not provided'}</td></tr>
            <tr><td><b>Subject:</b></td><td>${subject}</td></tr>
          </table>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });
    } else {
      // Log to console in development / when SMTP not configured
      console.log('Contact form submission (SMTP not configured):', { name, email, subject });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
