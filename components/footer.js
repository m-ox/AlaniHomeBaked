import styles from '/styles/Footer.module.scss'

import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerlinkswrapper}>
                <span>taysia@alanibakery.com</span>
                <span>(208) 500-8193</span>
            </div>
            <div className={styles.socialmedialinks}>
            <div className={styles.sociallink}>
                    <a href="https://www.facebook.com/alanibakery">
                        <AiFillFacebook />
                    </a>
                </div>
                <div className={styles.sociallink}>
                    <a href="https://www.instagram.com/alanibakery">
                        <AiFillInstagram />
                    </a>
                </div>
            </div>
            <div className={styles.legal}>
                <p>Alani Bakery and Gifts LLC is a cottage food operation not subject to regulatory inspections. Any allergen may be present in any item.</p>
                <p>&copy; Website created by Maudlin Oxalis 2022</p>
            </div>
        </div>
    )
}