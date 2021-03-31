import Link from 'next/link';

import styles from './style.module.css';

export default function Menu() {
    return (
        <div className={`${styles.portfolio_menu} ${styles.lista_menu}`}>
            <ul className={styles.menu_main}>
                <li className={styles.menu_item}><Link href="/">Início</Link></li>
                <li className={styles.menu_item}><Link href="/blog">Blog</Link></li>
                <li className={styles.menu_item}><Link href="/contact">Contato</Link></li>
            </ul>
        </div>
    )
}