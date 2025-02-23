"use client";
import s from "./navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import applyThemeChanges from "@/utility/setTheme";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [currentTheme, setCurrentTheme] = useState('dark');

    useEffect(()=> {
        const theme = localStorage.getItem("CURRENT_THEME") || 'dark';
        setCurrentTheme(theme)
        applyThemeChanges(theme);
    },[]);

    function onToggleTheme() {
        if(currentTheme ==='dark') {
            applyThemeChanges('light');
            setCurrentTheme('light');
        } else {
            applyThemeChanges('dark');
            setCurrentTheme('dark');
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
                </div>
                <div className={s.navSection}>
                    <div className={s.navItem}>
                        <div 
                            role="button" 
                            onClick={onToggleTheme} 
                            className={s.toggleWrapper}
                            aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
                        >
                            <FontAwesomeIcon 
                                color={currentTheme === 'dark' ? 'var(--text-primary)' : '#ffd700'}
                                size='lg' 
                                icon={currentTheme === 'dark' ? faMoon : faSun} 
                            />
                        </div>
                    </div>
                </div>
            </nav>
    )
}