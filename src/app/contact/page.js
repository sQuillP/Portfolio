"use client";
import s from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';


const toastConfig = {
    duration: 4000,
    position: 'bottom-center',
    icon: '',
    ariaProps: {
        role: 'status',
        'aria-live': 'polite',
    },
    removeDelay: 1000,
}



export default function Page() {


    async function onSubmitEmail(e) {
        e.preventDefault();
        try {
            await fetch('/api/resend', {
                method:'POST',
                body: new FormData(e.currentTarget)
            });
            toastConfig.icon='✔️';
            toast.success("Email has been sent!", toastConfig)
        } catch(error) {
            toastConfig.icon='❌';
            console.log(error);
            toast.error("Failed to send email. Check your connection", toastConfig);
        }
    }


    return (
        <form onSubmit={onSubmitEmail}>

            <div className={s.main}>
                <p className={s.header}>Drop a Message</p>
                <div className={s.inputs}>
                    <input required name='name' placeholder='Name' className={`${s.input} ${s.inputTop}`}/>
                    <input required name='email' type='email' placeholder='Email' className={`${s.input} ${s.inputTop}`}/>
                </div>
                <textarea required name='content' rows={10} className={`${s.input} ${s.textarea}`} placeholder="Anything you'd like to say?"/>
                <div className={s.submitSection}>
                    <button type='submit' className={s.sendButton}>Send &nbsp; <FontAwesomeIcon className={s.icon} color='var(--text-primary)' icon={faPaperPlane} size='xl'/></button>
                </div>
                <Toaster/>
            </div>
        </form>
    )
}