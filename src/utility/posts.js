import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';


export async function getPostBySlug(slug='test') {
    try {

        const blogDirectory = path.join(process.cwd(),'src','posts',`${slug}.mdx`);

        console.log(blogDirectory);
        const files =  fs.readFileSync(blogDirectory, {encoding:'utf-8'});

        const {data, content} = matter(files);
        return {metadata: {...data, slug: 'test'}, content};
    }
    catch(error) {
        return {};
    }
}