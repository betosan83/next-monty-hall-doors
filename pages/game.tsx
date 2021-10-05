import { useState } from "react"
import Door from "../components/Door"
import { createDoors, updateDoors } from "../functions/doors"
import styles from "../styles/Game.module.css"
import Link from "next/link"

export default function Game() {
    const [doors, setDoors] = useState(createDoors(3, 2))

    function renderDoors() {
        return doors.map(door => {
            return <Door key={door.number} value={door}
                onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
        })
    }
    return (
        <div className={styles.game}>
            <div className={styles.doors}>
                {renderDoors()}
            </div>
            <div className={styles.buttons}>
                <Link href="/" passHref={true}>
                    <button>Restart Game</button>
                </Link>
            </div>
        </div>
    )
}