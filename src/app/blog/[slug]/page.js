import {getPostBySlug, getAllPosts} from '@/utility/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import s from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { notFound } from 'next/navigation';


// Map MD components to html for styling purposes.
const mdxConfig = {
    h1: ({children})=> <h1 className={s.h1}>{children}</h1>,
    h2: ({children})=> <h2 className={s.h2}>{children}</h2>,
    h3: ({children})=> <h3 className={s.h3}>{children}</h3>,
    p: ({children})=> <p className={s.p}>{children}</p>,
    li: ({children})=> <li className={s.li}>{children}</li>,
    a: (props)=> <a href={props.href} target="_blank" className={s.a}>{props.children}</a>
}


export async function generateStaticParams() {
    return getAllPosts().map(post => ({slug: post.slug}));
}

export default async function Page({params}) {

    const p = await params;
    const post = await getPostBySlug(p.slug);

    if(post === null) {
        return notFound();
    }

    const {metadata, content} = post;

    return (
        <div className={s.main}>
            <Link className={s.back} href={'/blog'}>
            <FontAwesomeIcon icon={faArrowLeft} size='xl'/>&nbsp;&nbsp;Go back
            </Link>
            <div className={s.imageWrapper}>
                <Image style={{objectFit:'contain', borderRadius:'var(--border-radius)'}} alt='blog photo missing' src={metadata.image} fill/>
            </div>
            <p className={s.intro}>{metadata.title}</p>
            <p className={s.postedOn}>{metadata.postedOn}</p>
            <MDXRemote
                source={content}
                components={mdxConfig}
            />
        </div>
    )
}


