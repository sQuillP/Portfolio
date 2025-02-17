import BlogPosts from "@/components/BlogPosts/BlogPosts";
import s from './page.module.css';


export default function Page() {


    return (
        <div className={s.main}>
            <p className={s.title}>Blog Posts</p>
            <BlogPosts renderCount={5}/>
        </div>
    )
}