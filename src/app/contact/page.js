"use client";
import { useState } from 'react';
import s from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { sendEmail } from '@/utility/resend';


export default function Page() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mailContent, setMailContent] = useState('');


    async function onSubmitEmail() {
        const status = await sendEmail({name, email, content:mailContent});

        if(status === true) {
            console.log("Successfully sent email");
        } else {
            console.log("unable to send email");
        }
    }

    return (
        <div className={s.main}>
            <p className={s.header}>Drop a Message</p>
            <div className={s.inputs}>
                <input value={name} onChange={(e)=> setName(e.target.value)} placeholder='Name' className={`${s.input} ${s.inputTop}`}/>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' className={`${s.input} ${s.inputTop}`}/>
            </div>
            
            <textarea value={mailContent} onChange={(e)=> setMailContent(e.target.value)} rows={10} className={`${s.input} ${s.textarea}`} placeholder="Anything you'd like to say?"/>
            <div className={s.submitSection}>
                <button onClick={onSubmitEmail} className={s.sendButton}>Send &nbsp; <FontAwesomeIcon className={s.icon} color='var(--text-primary)' icon={faPaperPlane} size='xl'/></button>
            </div>
        </div>
    )
}