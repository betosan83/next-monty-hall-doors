import DoorModel from "../model/door";

export function createDoors(qty: number, selected: number): DoorModel[] {
    return Array.from({ length: qty }, (_, i) => {
        const number = i + 1
        const hasGift = number === selected
        return new DoorModel(number, hasGift)
    })
}