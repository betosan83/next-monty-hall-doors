import Card from "../components/Card";
import styles from "../styles/Form.module.css"
import Link from "next/link"
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function Form() {
  const [qtDoors, setQtDoors] = useState(3)
  const [withGift, setWithGift] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c" >
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Number of doors"
            value={qtDoors} onChange={newQt => setQtDoors(newQt)}></NumberInput>
        </Card>
      </div>
      <div>
        <Card >
          <NumberInput text="Door with gift"
            value={withGift} onChange={newDoorWithGift => setWithGift(newDoorWithGift)}></NumberInput>
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${qtDoors}/${withGift}`} passHref={true}>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
    </div >
  )
}
