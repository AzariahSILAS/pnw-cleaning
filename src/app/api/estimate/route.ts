import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, number, email, info, consent } = body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Estimate Form" <${process.env.EMAIL_SERVER_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Cleaning Estimate Request',
      html: `
        <h2>New Estimate Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${number}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Details:</strong><br/>${info.replace(/\n/g, '<br />')}</p>
        <p><strong>SMS Consent:</strong> ${consent ? 'Yes' : 'No'}</p>
      `,
    });

    return NextResponse.json({ message: 'Estimate sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
