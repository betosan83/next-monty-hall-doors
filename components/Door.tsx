import styles from "../styles/Door.module.css"
import DoorModel from "../model/porta"

interface DoorProps {
    door: DoorModel
}

export default function Door(props: DoorProps) {
    const { door } = props
    const selected = door.selected ? styles.selected : ''

    return (
        <div className={styles.area}>
            <div className={`${styles.structure} ${selected} `}>
                <div className={styles.door}>
                    <div className={styles.number}>{door.number}</div>
                    <div className={styles.doorhandle}></div>
                </div>
            </div>
            <div className={styles.floor}></div>
        </div>

    )
}