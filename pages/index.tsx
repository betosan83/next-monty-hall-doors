import { useState } from "react";
import Door from "../components/Door";
import { createDoors } from "../functions/doors";
import DoorModel from "../model/door";

export default function Home() {
  const [d1, setD1] = useState(new DoorModel(1))
  
  console.log(createDoors(3, 2))

  return (
    <div style={{display: "flex"}}>
      <Door value={d1} onChange={newDoor => setD1(newDoor)}></Door>
    </div>
  )
}
