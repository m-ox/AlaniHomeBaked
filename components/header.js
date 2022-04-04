import styles from '/styles/Header.module.scss'

import Image from 'next/image'
import Logo from './images/alanilogo.png'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image 
                    src={Logo}
                    height={90}
                    width={90}
                    alt="Alani Logo"
                />
            </div>
            <div className={styles.titlewrapper}>
                <h2>Alani Bakery and Gifts LLC</h2>
                <h4>Handmade and Homebaked</h4>
            </div>
        </div>
    )
}