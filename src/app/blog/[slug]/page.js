import {getPostBySlug} from '@/utility/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';


export default async function Page() {

    const post = await getPostBySlug();

    const {metadata, content} = post;
    console.log("CONTENT", content);
    
    return (
        <MDXRemote
            source={content}
            components={null}
        />
    )
}


