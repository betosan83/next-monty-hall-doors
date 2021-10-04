import styles from "../styles/Door.module.css"

export default function Door(props) {

    return (
        <div className={styles.area}>
            <div className={styles.structure}>
                <div className={styles.door}>
                    <div className={styles.number}>3</div>
                    <div className={styles.doorhandle}></div>
                </div>
            </div>
            <div className={styles.floor}></div>
        </div>

    )
}