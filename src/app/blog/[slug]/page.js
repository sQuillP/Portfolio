import {getPostBySlug} from '@/utility/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import s from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const mdxConfig = {
    h1: ({children})=> <h1 className={s.h1}>{children}</h1>,
    h2: ({children})=> <h2 className={s.h2}>{children}</h2>,
    h3: ({children})=> <h3 className={s.h3}>{children}</h3>,
    p: ({children})=> <p className={s.p}>{children}</p>,
    li: ({children})=> <li className={s.li}>{children}</li>,
    a: ({children})=> <a className={s.a}>{children}</a>
}


export default async function Page() {

    const post = await getPostBySlug();



    const {metadata, content} = post;


    
    return (
    <div className={s.main}>
        <Link className={s.back} href={'/blog'}>
           <FontAwesomeIcon icon={faArrowLeft} size='xl'/>&nbsp;&nbsp;Go back
        </Link>
        <div className={s.imageWrapper}>
            <Image style={{objectFit:'contain', borderRadius:'var(--border-radius)'}} alt='blog photo missing' src={'/profile.jpg'} height={350} width={600}/>
        </div>
        <p className={s.intro}>My path to becoming rank 6000 on leetcode</p>
        <p className={s.postedOn}>September 21, 2023</p>
        <MDXRemote
            source={content}
            components={mdxConfig}
        />
    </div>
    )
}


