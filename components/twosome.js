import styles from '../styles/Twosome.module.scss'

export default function Twosome(children) {
    console.log(Object.keys(children).length)

    if (Object.keys(children).length <= 4) {
        return (
            <div className={styles.twosomeContainer}>
                <div className={styles.twosomeFirst}>
                    {children.first}
                    {children.firstlabel}
                </div>
                <div className={styles.twosomeSecond}>
                    {children.second}
                    {children.secondlabel}
                </div>
            </div>)
    } else {
        return (
            <div className={styles.thirdsomeContainer}>
                <div className={styles.twosomeFirst}>
                    {children.first}
                    {children.firstlabel}
                </div>
                <div className={styles.twosomeSecond}>
                    {children.second}
                    {children.secondlabel}
                </div>
                <div className={styles.twosomeThird}>
                    {children.third}
                    {children.thirdlabel}
                </div>
            </div>)
    }
}