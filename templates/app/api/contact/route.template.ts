// app/api/contact/route.ts — Safe Harbor
// Drop this into /app/api/contact/route.ts in the Next.js project.
// Only needed if using Resend for contact form submissions.
// Skip this file entirely if using Formspree.
//
// Dependencies:
//   npm install resend
//
// Environment variables (add to .env.local and Vercel):
//   RESEND_API_KEY=re_xxxxxxxxxxxx   (from resend.com dashboard)
//   CONTACT_EMAIL=sonya@example.com  (Sonya's email — receives submissions)

import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? ''

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to Sonya
    await resend.emails.send({
      from: 'Safe Harbor Contact Form <noreply@sonya-zilman.com>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        ``,
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
