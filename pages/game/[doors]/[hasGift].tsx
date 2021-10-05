import { useEffect, useState } from "react"
import Door from "../../../components/Door"
import { createDoors, updateDoors } from "../../../functions/doors"
import styles from "../../../styles/Game.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Game() {
    const router = useRouter()
    const [doors, setDoors] = useState([])

    // The hook useEffect altes state of the component 
    // whenever an variable changes. When the data inside [] modifies.
    useEffect(() => {
        //Get params from URL using the variable names from file names.
        const doors = +router.query.doors
        const hasGift = +router.query.hasGift
        setDoors(createDoors(doors, hasGift))
    }, [router?.query])

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