"use client";
import ExperienceSheet from '../ExperienceSheet/ExperienceSheet';
import s from './ExperienceTabs.module.css';
import { useState } from 'react';

import myExperiences from '@/config/myExperiences.json';

export default function ExperienceTabs() {

    const [selectedTab, setSelectedTab] = useState('work');

    function styleSelected(tab, assignedTab) {
        if (assignedTab === tab) {
            return {color:'var(--text-primary)', background: "var(--bg-primary)"}
        }
        return {color: 'var(--text-primary)', background:'var(--bg-secondary)'}
    }

    return (
        <>

        <div className={s.container}>
            <button 
                className={s.tabButton}
                onClick={()=> setSelectedTab("work")}
                style={styleSelected(selectedTab, 'work')}
            >
                Work
            </button>
            <button 
                onClick={()=> setSelectedTab("education")}
                className={s.tabButton}
                style={styleSelected(selectedTab, 'education')}
            >
                Education
            </button>
        </div>
            <ExperienceSheet
                experiences={myExperiences[selectedTab]}
            />
        </>
    )
}