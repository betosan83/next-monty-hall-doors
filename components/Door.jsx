import styles from "../styles/Door.module.css"

export default function Door(props) {

    return (
        <div className={styles.area}>
            <div className={styles.structure}>
                <div className={styles.door}>
                    <div className={styles.numero}>3</div>
                </div>
            </div>
        </div>

    )
}