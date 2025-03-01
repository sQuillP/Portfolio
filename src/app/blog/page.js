import BlogPosts from "@/components/BlogPosts/BlogPosts";
import s from './page.module.css';
import { getAllPosts } from "@/utility/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export default function Page() {

    const posts = JSON.parse(JSON.stringify(getAllPosts()));


    return (
        <div className={s.main}>
            <Link className={s.back} href={'/'}>
                <FontAwesomeIcon style={{color:'var(--text-secondary)'}} icon={faArrowLeft} size="lg"/>
                <p className={s.goBack}>Back to Home</p>
            </Link>
            <p className={s.title}>Blog Posts</p>
            <BlogPosts renderCount={5} posts={posts}/>
        </div>
    )
}