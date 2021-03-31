import styles from './styles.module.css';

export default function SectionMenu(props) {

    const { posts } = props;

    return (
        <div className={styles.main}>
            {posts.map((p) => (
                <div key={p.link} className={styles.card}>
                    <p className={styles.type}>{p.type}</p>
                    <p className={styles.post_in}>{p.post_in}</p>
                    <h3 className={styles.title}>{p.title}</h3>
                    <p className={styles.description}>{p.description}</p>
                    <div className={styles.writefor}>
                        <img 
                            src="https://avatars.githubusercontent.com/u/13038529?v=4" 
                            alt="Alfredo Holz Junior"
                        />
                    </div>
                    <div className={styles.goto}>
                        <a href={`blog/${p.link}`}>Ler artigo</a>
                    </div>
                </div>

            ))}
        </div>
    )
}