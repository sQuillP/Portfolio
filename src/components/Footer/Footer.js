import SocialLinks from '../SocialLinks/SocialLinks';
import s from './footer.module.css';


export default function Footer() {


    return (
        <div className={s.main}>
            <p className={s.footerText}>{Math.floor(new Date().getFullYear())} your-domain.com | privacy?</p>
            <SocialLinks/>
        </div>
    )
}