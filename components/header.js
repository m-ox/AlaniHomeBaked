import styles from '/styles/Header.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>

            </div>
            <div className={styles.titlewrapper}>
                <h2>Alani Bakery and Gifts</h2>
                <h4>Handmade and Homebaked</h4>
            </div>

            <div className={styles.navbar}>
                Navbar stuff
            </div>
        </div>
    )
}