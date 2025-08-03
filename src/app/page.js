import SocialLinks from "../components/SocialLinks/SocialLinks";
import s from './page.module.css';
import Image from "next/image";
import ResumeDownload from "../components/ResumeDownload/ResumeDownload";
import calculateYears from '@/utility/time';
import ExperienceTabs from "../components/ExperienceTabs/ExperienceTabs";

import featuredProjects from '@/config/featuredProjects.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import BlogPosts from "../components/BlogPosts/BlogPosts";
import Leetcode from "@/components/Leetcode/Leetcode";
import { getAllPosts } from "@/utility/posts";

export default function Home() {


  // getting old, gotta optimize this large calulation
  const age = Math.floor(calculateYears('02/26/1999'));

  const allBlogPosts = JSON.parse(JSON.stringify(getAllPosts()));



  return (
    <>
      <section className={s.section}>
        <div className={s.headerContainer}>
          <div className={s.textDetails}>
            <h1 className={s.h1}>Hey! It's Will ✌️</h1>
            <p className={s.p}>
              I am a {age} year old software engineer at Kognitiv edge currently engineering data solutions for the United States Department of Defense (Uncle Sam).
            </p>
            <p className={s.p}>Some abnormal talents of mine include juggling and riding unicycles (but not simultaneously).</p>
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
        <ExperienceTabs/>
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
          posts={allBlogPosts}
        />
      </section>
      <section className={s.section}>
        <div className={s.headerDetails}>
            <p className={s.h2}>LeetCode Stats</p>
        </div>
        <Leetcode/>
      </section>
    </>
  );
}
