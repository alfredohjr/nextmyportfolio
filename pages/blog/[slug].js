import Head from 'next/head';

import fs from 'fs';

import { format } from 'date-fns';
import grayMatter from 'gray-matter';
import remark from 'remark';
import remarkHtml from 'remark-html';
import gfm from 'remark-gfm';

import readPosts from '../../src/utils/readPosts';

import Layout from '../../src/components/Layout';

import styles from './styles.slug.module.css';

export function getStaticPaths() {

    const posts = readPosts();
    const paths = posts.map((p) => {
        return { params: { slug : p.link } }
    })

    return { paths, fallback: false }
}

export function getStaticProps({params}) {

    const fileContent = fs.readFileSync(`./_posts/${params.slug}.md`,'utf-8');
    const {data, content} = grayMatter(fileContent);
    const {title, type, description, post_in} = data;
    const htmlContent = remark()
        .use(remarkHtml)
        .use(gfm)
        .processSync(content);
    
    return {
        props: {
            title: title,
            type: type,
            description: description,
            post_in: format(post_in,'yyyy-MM-dd'),
            content: htmlContent.toString()
        }
    }
}

export default function Blog(props) {
    return (
        <>
            <Head>
                <meta name="Description" content={props.description} />
            </Head>
            <Layout nameTitle={props.title}>
                <div className={styles.main}>
                    <div className={styles.main_meta}>
                        <h1>{props.title}</h1>
                        <h3>{props.description}</h3>
                        <h4>Publicado em: {props.post_in}</h4>
                    </div>
                    <hr />
                    <div className={styles.main_content}>
                        <div
                            className={styles['markdown']}
                            dangerouslySetInnerHTML={{ __html: props.content }}
                            ></div>
                    </div>
                </div>
            </Layout>
        </>
    )
}