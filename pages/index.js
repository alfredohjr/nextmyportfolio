import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Layout from '../src/components/Layout';
import SectionMenu from '../src/components/SectionMenu';
import AdsBanner from '../src/components/AdsBanner';
import AppIdeasMenu from '../src/components/AppIdeasMenu';

import readPosts from '../src/utils/readPosts';
import readAppIdeas from '../src/utils/readAppIdeas';
import AppIdeas from '../src/components/AppIdeasMenu';


export function getStaticProps() {
    const posts = readPosts().slice(0,6);
    const appIdeas = readAppIdeas().slice(0,6);
    
    return {
        props: {posts, appIdeas}
    }
}

export default function Home(props) {

    const { posts, appIdeas } = props;

    return (
        <>
            <Head>
                <script data-ad-client={`${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <Layout nameTitle="Início">
                <div className={styles.part_01}>
                    <h1 className={styles.name}>Alfredo Holz Junior</h1>
                    <hr />
                </div>
                <hr className={styles.horizontalline} />
                <div className={styles.part_02}>
                    <h2>Últimos posts...</h2>
                    <SectionMenu posts={posts} />
                </div>
                <hr className={styles.horizontalline} />
                <div className={styles.part_02}>
                    <h2>App Ideas</h2>
                    <p>Uma coleção de desafios para programadores, estou fazendo aos poucos!</p>
                    <AppIdeas props={appIdeas} />
                </div>
                <div className={styles.part_03}>
                    <AdsBanner />
                </div>
            </Layout>
        </>
    )
}
