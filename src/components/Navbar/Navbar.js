"use client";
import s from "./navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from "@fortawesome/free-solid-svg-icons";
import setTheme from "@/utility/setTheme";
import { useEffect } from "react";

export default function Navbar() {
    
    useEffect(()=> {
        const theme = localStorage.getItem("CURRENT_THEME");
        if(theme === 'light') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    },[]);


    function onSetTheme() {
        const theme = localStorage.getItem("CURRENT_THEME");
        console.log(theme);
        if (!theme || theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return (
        <nav className={s.mainNavbar}>
            <div className={s.navSection}>
                <div className={s.navItem}>
                    <Link className={s.link} href={'/'}>Home</Link>
                </div>
                <div className={s.navItem}>
                    <Link className={s.link} href={'/projects'}>Projects</Link>
                </div>
                <div className={s.navItem}>
                    <Link className={s.link} href={'/blog'}>Blog</Link>
                </div>
                <div className={s.navItem}>
                    <Link className={s.link} href={'/contact'}>Contact</Link>
                </div>
                <div className={s.navItem}>
                </div>
            </div>
            <div className={s.navSection}>
                <div className={s.navItem}>
                    <div role="button" onClick={onSetTheme} className={s.toggleWrapper}>
                        <FontAwesomeIcon color='#FFD700' size='lg' icon={faSun} />
                    </div>
                </div>
            </div>
        </nav>
    )
}