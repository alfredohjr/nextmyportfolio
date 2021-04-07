import readPosts from '../../../src/utils/readPosts';
import { format } from 'date-fns';

export default (req, res) => {

    const baseUrl = process.env.NEXT_PUBLIC_BASEURL
    var urls = [
        {fullUrl: `${baseUrl}`, post_in: '2021-04-01'},
        {fullUrl: `${baseUrl}/contact`, post_in: '2021-04-01'}
    ];
    
    // para os posts ou /posts
    const posts = readPosts();
    urls = urls.concat(posts.map((p) => {
                        return { 
                            fullUrl: `${baseUrl}/blog/${p.link}`,
                            post_in: p.post_in
                        }
                    }))
    


    var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    for(const u of urls){
        xml += `<url>
                    <loc>${u.fullUrl}</loc>
                    <lastmod>${u.post_in}</lastmod>
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