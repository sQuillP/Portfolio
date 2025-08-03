import { NextResponse } from "next/server"
import { Resend } from "resend";
// import { Ratelimit } from "@upstash/ratelimit";
import {Redis } from '@upstash/redis';

const resend = new Resend(process.env.RESEND_API_KEY);


// const rateLimit = new Ratelimit({
//     redis:Redis.fromEnv(),
//     limiter: Ratelimit.slidingWindow(3, '30m'), 
//     analytics: true,
// });


export const config= {
    runtime: 'edge'
};


export async function POST(req) {
    try {
        // const ip = req.headers.get("x-forwarded-for");
        // const {success} = await rateLimit.limit(ip);

        // Annoying user
        // if (success === false) {
        //     return NextResponse.json({data:"Please don't spam my inbox"}, {status:429});
        // }

        // Extract the form data.
        const requestData = await req.formData();
        const formData = Object.fromEntries(requestData.entries());
        const {name, email, content} = formData;

        // Send the email now that this person isn't spamming my inbox.
        const response = await resend.emails.send({
            from: 'william.it.com <contact@inquiries.william.it.com>',
            to: ['will.m.pattison@gmail.com'],
            cc: [email],
            subject: 'Inquiry from a user on your site!',
            replyTo: email,
            text: `From: ${name}\n\n${content}`
        });

        console.log(response.data);

        return NextResponse.json({data:"Email has been sent"},{status:200})
    } catch(error) {
        console.error(error);
        return NextResponse.json({data:"Failed to send email"}, {status:500});
    }
}
