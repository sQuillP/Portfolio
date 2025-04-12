import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';


export async function getPostBySlug(slug) {
    try {

        const blogDirectory = path.join(process.cwd(),'src','posts',`${slug}.mdx`);
        const files =  fs.readFileSync(blogDirectory, {encoding:'utf-8'});

        const {data, content} = matter(files);
        return {metadata: {...data}, content};
    }
    catch(error) {
        console.log(error);
        return null;
    }
}


/**
 * 
 * @returns list of posts currently in the /posts directory
 */
export function getAllPosts() {
    try {

        const blogDirectory = path.join(process.cwd(), "src",'posts')
        const files = fs.readdirSync(blogDirectory,{encoding:'utf-8'});
        const fileData = [];


        for(const file of files) {
            const rawFile = fs.readFileSync(`${blogDirectory}/${file}`);
            fileData.push( matter(rawFile) );
        }

        return fileData
    } catch(error) {
        console.log("Unable to fetch slugs", error);
    }
}