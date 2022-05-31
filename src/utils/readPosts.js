import fs from 'fs';

import grayMatter from 'gray-matter';

import { format, isAfter } from 'date-fns';

export default function readPosts() {

    const files = fs.readdirSync('./_posts','utf-8');


    var posts = []
    for(const f of files) {
        const fileContent = fs.readFileSync(`./_posts/${f}`,'utf-8');
        const {title, type, description, post_in} = grayMatter(fileContent).data;

        
        if(isAfter(new Date(),post_in) && (!f.startsWith('_'))) {
            
            posts.push({
                link: f.replace('.md',''),
                title: title,
                type: type, 
                description: description,
                post_in: format(post_in,'yyyy-MM-dd'),
                post_in_ptbr: format(post_in,'dd/MM/yyyy'),
            })
        } 
    };
    
    return posts;
}