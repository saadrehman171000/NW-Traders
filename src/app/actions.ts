'use server'

import nodemailer from 'nodemailer'

type State = {
  success?: boolean;
  error?: {
    name: string | null;
    email: string | null;
    phone: string | null;
    message: string | null;
  };
} | null;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'saadrehman17100@gmail.com',
    pass: process.env.EMAIL_PASSWORD // You'll need to set this up
  }
});

export async function submitContactForm(prevState: State, formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const message = formData.get('message')

  if (!name || !email || !phone || !message) {
    return {
      success: false,
      error: {
        name: !name ? 'Name is required' : null,
        email: !email ? 'Email is required' : null,
        phone: !phone ? 'Phone is required' : null,
        message: !message ? 'Message is required' : null,
      }
    }
  }

  try {
    await transporter.sendMail({
      from: 'saadrehman17100@gmail.com',
      to: 'saadrehman17100@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return { success: true }
  } catch (error) {
    console.error('Email error:', error);
    return { 
      success: false, 
      error: {
        name: null,
        email: null,
        phone: null,
        message: 'Failed to send message. Please try again.'
      }
    }
  }
}

