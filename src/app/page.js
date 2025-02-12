"use client";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import s from './page.module.css';
import Image from "next/image";
import ResumeDownload from "./components/ResumeDownload/ResumeDownload";
import calculateYears from '@/utility/time';
import { useState } from "react";
import ExperienceTabs from "./components/ExperienceTabs/ExperienceTabs";
import { useMemo } from "react";



export default function Home() {

  const WORK = 0;
  const EDUCATION = 1;
  const BIRTHDAY = '02/26/1999';
  const [selectedTab, setSelectedTab] = useState(WORK);

  // getting old, gotta optimize this large calulation
  const age =  useMemo(()=> Math.floor(calculateYears(BIRTHDAY)), []);

  return (
    <>
      <section>
        <div className={s.headerContainer}>
          <div className={s.textDetails}>
            <h1 className={s.h1}>Hey! It's Will ✌️</h1>
            <p className={s.p}>
              I am a {age} year 
              old software engineer currently based in Indianapolis 
              contracting at <strong>Eli Lilly & Company!</strong>
            </p>
            <p className={s.p}>Some abnormal talents of mine include juggling and riding unicycles (but not both).</p>
          </div>
          <div className={s.profileContainer}>
            <Image alt="wat" height={170} width={170} src={'/profile.webp'}/>
          </div>
        </div>
        <div className={s.clickables}>
          <ResumeDownload/>
          <SocialLinks/>
        </div>
      </section>
      <section>
        <ExperienceTabs 
          WORK={WORK} 
          selectedTab={selectedTab}
          EDUCATION={EDUCATION}
          onSelect={(tab)=> setSelectedTab(tab)}
        />
      </section>
    </>
  );
}
