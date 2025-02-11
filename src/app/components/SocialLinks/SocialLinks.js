import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import s from './socialLinks.module.css';



export default function SocialLinks() {


    return (
        <div className={s.sLinks}>
            <Link className={s.sLink} target="_blank" href={'https://www.linkedin.com/in/william-pattison-91ab6519b/'}>
                <FontAwesomeIcon color="var(--text-secondary-2)" icon={faLinkedin} size="xl" />
            </Link>
            <Link className={s.sLink} href={'https://github.com/sQuillP'}>
                <FontAwesomeIcon color="var(--text-secondary-2)" icon={faGithub} size="xl"/>
            </Link>
            <Link className={s.sLink} href={'mailto:will.m.pattison@gmail.com?subject=Inquiry'}>
                <FontAwesomeIcon color="var(--text-secondary-2)" icon={faEnvelope} size="xl"/>
            </Link>
        </div>
    )
}