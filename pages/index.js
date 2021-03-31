import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Layout from '../src/components/Layout';
import SectionMenu from '../src/components/SectionMenu';

import readPosts from '../src/utils/readPosts';


export function getStaticProps() {
    const posts = readPosts();
    
    return {
        props: {posts}
    }
}

export default function Home(props) {

    const { posts } = props;

    return (
        <Layout nameTitle="Início">
            <div className={styles.part_01}>
                <h1 className={styles.name}>Alfredo Holz Junior</h1>
                <hr />
            </div>
            <hr />
            <div className={styles.part_02}>
                <h2>Últimos posts...</h2>
                <SectionMenu posts={posts} />
            </div>
        </Layout>
    )
}
