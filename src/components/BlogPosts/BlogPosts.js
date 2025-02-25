"use client";
import s from './blogpost.module.css'
import { useRouter } from 'next/navigation';


export default function BlogPosts({renderCount, posts}) {

    const router = useRouter();


    return (
        <div className={s.container}>
            {
                posts.map( (item, index) => {
                    if(index < renderCount) {
                        return (
                            <div onClick={()=> router.push(`/blog/${item.data.slug}`)} key={item.data.title} className={s.blogItem}>
                                <div className={s.blogCol}>
                                    <p className={s.title}>{item.data.title}</p>
                                    <p className={s.description}>{item.data.description}</p>
                                </div>
                                <div className={s.blogCol}>
                                    <p className={s.postedOn}>{item.data.postedOn}</p>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )

}