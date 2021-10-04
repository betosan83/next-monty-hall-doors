export default class DoorModel {
    #number: number
    #hasGift: boolean
    #selected: boolean
    #open: boolean

    constructor(number: number, hasGift=false, selected=false, open=false) {
        this.#number = number
        this.#hasGift = hasGift
        this.#selected = selected
        this.#open = open
    }

    get number() {
        return this.#number
    }
    get hasGift() {
        return this.#hasGift
    }
    get selected() {
        return this.#selected
    }
    get open() {
        return this.#open
    }

    unselect() {
        const selected = false
        return new DoorModel(this.number, this.hasGift, selected, this.open)
    }

    togleSelection() {
        const selected = !this.selected
        return new DoorModel(this.number, this.hasGift, selected, this.open)
    }
    openning() {
        const opened = true
        return new DoorModel(this.number, this.hasGift, this.selected, opened)
    }
}