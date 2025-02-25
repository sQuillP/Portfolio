import BlogPosts from "@/components/BlogPosts/BlogPosts";
import s from './page.module.css';
import { getAllPosts } from "@/utility/posts";


export default function Page() {

    const posts = JSON.parse(JSON.stringify(getAllPosts()));


    return (
        <div className={s.main}>
            <p className={s.title}>Blog Posts</p>
            <BlogPosts renderCount={5} posts={posts}/>
        </div>
    )
}