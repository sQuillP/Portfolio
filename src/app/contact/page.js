"use client";
import { useState } from 'react';
import s from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';



export default function Page() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mailContent, setMailContent] = useState('');


    return (
        <div className={s.main}>
            <p className={s.header}>Drop a Message</p>
            <div className={s.inputs}>
                <input onChange={(e)=> setName(e.target.value)} placeholder='Name' className={`${s.input} ${s.inputTop}`}/>
                <input onChange={(e)=> setEmail(e.target.value)} placeholder='Email' className={`${s.input} ${s.inputTop}`}/>
            </div>
            
            <textarea rows={10} className={`${s.input} ${s.textarea}`} placeholder="Anything you'd like to say?"/>
            <div className={s.submitSection}>
                <button className={s.sendButton}>Send &nbsp; <FontAwesomeIcon className={s.icon} color='var(--text-primary)' icon={faPaperPlane} size='xl'/></button>
            </div>
        </div>
    )
}