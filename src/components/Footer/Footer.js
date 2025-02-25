import SocialLinks from '../SocialLinks/SocialLinks';
import s from './footer.module.css';


export default function Footer() {


    return (
        <div className={s.main}>
            <p className={s.footerText}><span className={s.cc}>&copy;</span> {Math.floor(new Date().getFullYear())} | william.it.com</p>
            <SocialLinks/>
        </div>
    )
}