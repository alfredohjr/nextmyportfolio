import fs from 'fs';
import path from 'path';
import Camel2String from './camelcase2string';

export default function categoryList() {

    const dir = './public/images/categories';
    const files = fs.readdirSync(dir);

    var json = [];
    for (const file of files) {
        
        const stat = fs.lstatSync(path.join(dir, file));

        
        if ((stat.isDirectory()) & (!file.startsWith('_'))){
            
            var data = null
            try{
                data = fs.readFileSync(`./public/images/categories/${file}/description.md`,'utf-8');
            } catch(error) {
                // @todo - pegar esse erro aqui!
            }
            
            json.push({
                name: Camel2String(file),
                file:file,
                imageUrl: `/images/categories/${file}/index.jpg`,
                url: `/portfolio/${file}`,
                description: data
            });
        }
    }

    return json;
}