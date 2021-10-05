import styles from "../styles/Door.module.css"
import DoorModel from "../model/door"
import Gift from "../components/Gift"

interface DoorProps {
    value: DoorModel
    onChange: (novaPorta: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const door = props.value
    const selected = door.selected && !door.open ? styles.selected : ''

    const toggleSelection = e => props.onChange(door.toggleSelection())
    const open = e => {
        e.stopPropagation()
        props.onChange(door.openning())
    }
    function renderDoor() {
        return (

            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.doorhandle} onClick={open}></div>
            </div>

        )
    }

    return (
        <div className={styles.area} onClick={toggleSelection}>
            <div className={`${styles.structure} ${selected} `}>
                {door.closed ? renderDoor() : door.hasGift ? <Gift></Gift> : false}
            </div>
            <div className={styles.floor}></div>
        </div>

    )
}