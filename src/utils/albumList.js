import fs from 'fs';
import path from 'path';

import Camel2String from './camelcase2string';

export default function albumList(album) {

    const nameFolder = album;

    const dir = `./public/images/categories/`;
    const files = fs.readdirSync(dir);

    var json = [];
    for (const file of files) {
        
        const stat = fs.lstatSync(path.join(dir, file));
        
        if (stat.isDirectory()){
            
            const files2 = fs.readdirSync(path.join(dir, file));

            for(const file2 of files2) {
                if (file2 === nameFolder) {

                    const files3 = fs.readdirSync(path.join(dir,file,file2))
                    for(const file3 of files3) {
                        if((!file.startsWith('_'))) {
                            json.push({
                                name: Camel2String(file),
                                file: file,
                                url: `/images/categories/${file}/${file2}/${file3}`
                            });
                        }
                    }
                }
            }
            
        }
    }

    return json;
}