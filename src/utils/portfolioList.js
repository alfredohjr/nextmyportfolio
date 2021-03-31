import fs from 'fs';
import path from 'path';

import Camel2String from './camelcase2string';

export default function portfolioList(category) {

    const id = category;

    const dir = `./public/images/categories/${id}`;
    var files = null
    try {
        files = fs.readdirSync(dir);
    } catch (error) {
        return res.status(400).json({message:'not found!'})
    }

    var json = [];
    for (const file of files) {
        
        const stat = fs.lstatSync(path.join(dir, file));
        
        if ((stat.isDirectory()) & (!file.startsWith('_'))){

            var data = null
            try{
                data = fs.readFileSync(`./public/images/categories/${id}/${file}/description.md`,'utf-8');
            } catch(error) {
                
            }

            json.push({
                name: Camel2String(file),
                file:file,
                cover: `/images/categories/${id}/${file}/index.jpg`,
                description: data
            });
        }
    }

    return json;
}