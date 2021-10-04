export default class Door {
    #number
    #hasGift
    #selected
    #open

    constructor(number, hasGift, selected, open) {
        this.#number
        this.#hasGift
        this.#selected
        this.#open
    }

    get numero() {
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
        return new Door(this.number, this.hasGift, selected, this.open)
    }

    togleSelection() {
        const selected = !this.selected
        return new Door(this.number, this.hasGift, selected, this.open)
    }
    open() {
        const opened = true
        return new Door(this.number, this.hasGift, this.selected, opened)
    }
}