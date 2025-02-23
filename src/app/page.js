"use client";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import s from './page.module.css';
import Image from "next/image";
import ResumeDownload from "../components/ResumeDownload/ResumeDownload";
import calculateYears from '@/utility/time';
import { useState } from "react";
import ExperienceTabs from "../components/ExperienceTabs/ExperienceTabs";
import { useMemo } from "react";

import ExperienceSheet from "../components/ExperienceSheet/ExperienceSheet";
import myExperiences from '@/config/myExperiences.json';
import featuredProjects from '@/config/featuredProjects.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import BlogPosts from "../components/BlogPosts/BlogPosts";
import Leetcode from "@/components/Leetcode/Leetcode";

export default function Home() {

  const WORK = 'work';
  const EDUCATION = 'education';
  const BIRTHDAY = '02/26/1999';
  const [selectedTab, setSelectedTab] = useState(WORK);



  // getting old, gotta optimize this large calulation
  const age =  useMemo(()=> Math.floor(calculateYears(BIRTHDAY)), []);


  console.log(calculateYears(BIRTHDAY));

  return (
    <>
      <section className={s.section}>
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
            <Image alt="wat" height={170} width={170} src={'/profile.jpg'}/>
          </div>
        </div>
        <div className={s.clickables}>
          <ResumeDownload/>
          <SocialLinks/>
        </div>
      </section>
      <section className={s.section}>
        <ExperienceTabs 
          WORK={WORK} 
          selectedTab={selectedTab}
          EDUCATION={EDUCATION}
          onSelect={(tab)=> setSelectedTab(tab)}
        />
       <ExperienceSheet
          experiences={myExperiences[selectedTab]}
       />
      </section>
      <section className={s.section}>
        <div className={s.headerDetails}>
          <p className={s.h2}>Projects</p>
          <Link 
            className={s.link} 
            href={"/projects"}
          >
            See More  <FontAwesomeIcon style={{marginLeft: 10}} icon={faArrowRight} size="xl" color="inherit"/>
          </Link>
        </div>
        <div className={s.projectCardContainer}>
          {
            featuredProjects.map((fp, i) => {
              if(i < 2) {
                return (
                  <ProjectCard
                    key={fp.title}
                    {...fp}
                  />
                )
              }
            })
          }
        </div>
      </section>
      <section className={s.section}>
          <div className={s.headerDetails}>
            <p className={s.h2}>Blog Posts</p>
            <Link 
              className={s.link} 
              href={"/projects"}
            >
              See More  <FontAwesomeIcon style={{marginLeft: 10}} icon={faArrowRight} size="xl" color="inherit"/>
          </Link>
          </div>
        <BlogPosts
          renderCount={3} 
        />
        <Leetcode/>
      </section>
    </>
  );
}
