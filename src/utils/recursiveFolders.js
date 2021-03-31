import fs from 'fs';
import path from 'path';

export default function recursiveFolders() {

    const dir = `./public/images/categories/`;
    const files = fs.readdirSync(dir);

    var json = [];
    for (const file of files) {
        
        const stat = fs.lstatSync(path.join(dir, file));
        
        if (stat.isDirectory()){
            
            const files2 = fs.readdirSync(path.join(dir, file));
            
            for(const file2 of files2) {
                
                const stat = fs.lstatSync(path.join(dir, file, file2));

                if (stat.isDirectory()) {

                    json.push({ folder:file2 });
                    
                    }
                }
            }
            
        }

    return { data: json }
}
