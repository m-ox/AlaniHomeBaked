import styles from '/styles/Twosome.module.scss'

export default function Twosome(children) {
    console.log(children)

    return (
        <div className={module.twosomeContainer}>
            <div className={module.twosomeFirst}>
            {children.first}
            </div>
            <div className={module.twosomeSecond}>
            {children.second}
            </div>
        </div>)
}