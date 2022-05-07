import styles from '../styles/Hero.module.scss'
import Image from 'next/image'

export default function Layout(children) {
    console.log(children)
    return (
        <div className={styles.heroContainer}>
            {children.img}
            <div className={styles.heroText}>
                {children.title}
                {children.summary}
            </div>
        </div>
    )
}