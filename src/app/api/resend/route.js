import { NextResponse } from "next/server"
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { createClient } from "@vercel/kv";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log("redis url");
console.log(process.env.REDIS_URL);

const redis = await createClient({url: process.env.REDIS_URL}).connect();

// const rateLimit = new Ratelimit({
//     redis,
//     limiter: Ratelimit.slidingWindow(5, '10m')
// });


export const config = {
    runtime: 'edge'
};

export async function POST(req) {
    try {

        const value = await redis.get('myKey');
        
        // console.log(req, req.body);
        // const ip = req.headers['x-forwarded-for'];
        // console.log(ip);
        // const {success} = await rateLimit.limit(ip);

        // if (success === false) {
        //     return NextResponse.json({data:"Please don't spam my inbox"}, {status:429});
        // }
        // const requestData = await req.formData();
        // const formData = Object.fromEntries(requestData.entries());
        // const {name, email, content} = formData;

        // const response = await resend.emails.send({
        //     from: 'william.it.com <contact@inquiries.william.it.com>',
        //     to: ['will.m.pattison@gmail.com'],
        //     subject: 'Inquiry from a user on your site!',
        //     replyTo: email,
        //     text: `From: ${name}\n\n${content}`
        // });

        return NextResponse.json({data:"Success"},{status:200})
    } catch(error) {
        console.log(error);
        return NextResponse.json({data:"Failed to send email"}, {status:500});
    }
}
