import DoorModel from "../model/door";

export function createDoors(qty: number, selected: number): DoorModel[] {
    return Array.from({ length: qty }, (_, i) => {
        const number = i + 1
        const hasGift = number === selected
        return new DoorModel(number, hasGift)
    })
}

export function updateDoors(doors: DoorModel[], changedDoor: DoorModel) :DoorModel[] {
    return doors.map(currentDoor => {
        const sameAsChanged = currentDoor.number === changedDoor.number

        if(sameAsChanged) {
            return changedDoor
        } else {
            return changedDoor.open ? currentDoor : currentDoor.unselect()
        }
    })
}