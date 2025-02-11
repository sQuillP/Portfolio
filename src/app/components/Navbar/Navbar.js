"use client";
import s from "./navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from "@fortawesome/free-solid-svg-icons";
import setTheme from "@/utility/setTheme";

export default function Navbar() {
    

    return (
        <nav className={s.mainNavbar}>
            <div className={s.navSection}>
                <div className={s.navItem}>
                    <Link className={s.link} href={'/home'}>Home</Link>
                </div>
                <div className={s.navItem}>
                    <Link className={s.link} href={'/projects'}>Projects</Link>
                </div>
                <div className={s.navItem}>
                    <Link className={s.link} href={'/blog'}>Blog</Link>
                </div>
                <div className={s.navItem}>
                    <Link className={s.link} href={'/Contact'}>Contact</Link>
                </div>
                <div className={s.navItem}>
                </div>
            </div>
            <div className={s.navSection}>
                <div className={s.navItem}>
                    <div role="button" onClick={setTheme} className={s.toggleWrapper}>
                        <FontAwesomeIcon color='#FFD700' size='lg' icon={faSun} />
                    </div>
                </div>
            </div>
        </nav>
    )
}