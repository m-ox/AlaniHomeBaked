import styles from '/styles/Navbar.module.scss'

import { FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Navbar() {
    return (
        <div className={styles.navbar}>

            <div className={styles.navbaritems}>
                <a>Home</a>
                <a>About</a>
                <a>Contact</a>
                <a>Gallery</a>
                <a>FAQ</a>
            </div>

            <div className={styles.navbarcontact}>
                <p>taysia@alanibakery.com</p>
                <p>(208) 500-8193</p>
                <div className={styles.sociallink}>
                    <a href="https://www.facebook.com/alanibakery">
                        <FaFacebook />
                    </a>
                </div>
                <div className={styles.sociallink}>
                    <a href="https://www.instagram.com/alanibakery">
                        <FaInstagram />
                    </a>
                </div>
            </div>
            
        </div>
    )
}