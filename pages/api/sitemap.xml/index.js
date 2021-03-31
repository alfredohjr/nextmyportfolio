import readPosts from '../../../src/utils/readPosts';
import { format } from 'date-fns';

export default (req, res) => {

    const baseUrl = 'http://localhost:3000'
    var urls = [{fullUrl: `${baseUrl}`}];
    
    // para os posts ou /posts
    const posts = readPosts();
    urls = urls.concat(posts.map((p) => {
                        return { 
                            fullUrl: `${baseUrl}/blog/${p.link}`
                        }
                    }))
    


    var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    for(const u of urls){
        xml += `<url>
                    <loc>${u.fullUrl}</loc>
                    <lastmod>${format(new Date,'yyyy-MM-dd')}</lastmod>
                    <priority>0.50</priority>
                </url>`
    }
    xml += '</urlset>'

    res.setHeader('Content-Type', 'text/xml')
    res.write(xml)
    res.end()
  }


// export default function Sitemap(props) {

//     const { urls } = props;

//     return (
//         <>
//             {`<?xml version="1.0" encoding="UTF-8"?>
//                 <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`}
//             {    
//             urls.map((u) => (
//                 `<url>
//                     <loc>${u.fullUrl}</loc>
//                     <lastmod>${format(new Date,'yyyy-MM-dd')}</lastmod>
//                     <priority>0.50</priority>
//                 </url>`
//             ))
//             }

//             {`</urlset>`}
//         </>
//     );
// }