import styles from './AnimationBG.module.css'

export default function AnimationBG({hiddenPosition}) {
    return (
        <div className={styles.squares}>
            <div className={styles.square} style={{visibility: hiddenPosition === 1 ? 'hidden' : 'visible'}}></div>
            <div className={styles.square} style={{visibility: hiddenPosition === 2 ? 'hidden' : 'visible'}}></div>
            <div className={styles.square} style={{visibility: hiddenPosition === 3 ? 'hidden' : 'visible'}}></div>
            <div className={styles.square} style={{visibility: hiddenPosition === 4 ? 'hidden' : 'visible'}}></div>
        </div>
    )
}