import styles from "../styles/Door.module.css"
import DoorModel from "../model/porta"

interface DoorProps {
    value: DoorModel
    onChange: (novaPorta: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const door = props.value
    const selected = door.selected ? styles.selected : ''

    const toggleSelection = e => props.onChange(door.toggleSelection())

    return (
        <div className={styles.area} onClick={toggleSelection}>
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