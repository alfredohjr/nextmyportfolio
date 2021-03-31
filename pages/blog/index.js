
import Layout from '../../src/components/Layout';
import SectionMenu from '../../src/components/SectionMenu';
import readPosts from '../../src/utils/readPosts';

import styles from './styles.index.module.css'

export function getStaticProps() {
    const posts = readPosts();
    
    return {
        props: {posts}
    }
}

export default function Blog(props) {

    const { posts } = props;

    return (
        <Layout nameTitle="Blog">
            <div className={styles.main}>
                <h1>Aqui você encontra os últimos posts...</h1>
                <p>Compartilhando um pouco do meu conhecimento, e mais algumas coisas!</p>
                <hr />
            </div>
            <SectionMenu posts={posts} />
        </Layout>
    )
}