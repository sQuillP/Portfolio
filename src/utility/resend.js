"use server";

import { Resend } from "resend";

const resend = new Resend('API_KEY_HERE');

export async function sendEmail({name, email, content}) {
  const { data, error } = await resend.emails.send({
    from: email,
    to: ['will.m.pattison@gmail.com'],
    subject: 'Inquiry from a user on your site!',
    replyTo: email,
    text: `From: ${name}\n\n${content}`
  });

  if (error) {
    console.log(error);
    return false;
  }

  return true;
}