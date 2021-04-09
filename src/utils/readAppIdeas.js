import fs from 'fs';

import path from 'path';

import grayMatter from 'gray-matter';
import { format, isAfter } from 'date-fns';

export default function readAppIdeas(){
    const pathMain = './pages/appideas';
    const files = fs.readdirSync(pathMain, 'utf-8');

    var paths = []
    files.forEach((v,i) => {
        const stat = fs.statSync(path.join(pathMain,v));
        if (stat.isDirectory()){
            try {
            const fileContent = fs.readFileSync(`${pathMain}/${v}/README.md`);
            const {title, type, description, post_in, wallpaper} = grayMatter(fileContent).data;
            
                if(isAfter(new Date(),post_in)){
                    paths.push({file:v, title, type, description, wallpaper, post_in:format(post_in,'yyyy-MM-dd')});
                }

            } catch (err) {
                
            }
        }
    })
    return paths;
}