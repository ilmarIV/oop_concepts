class Student {
    #nimi
    #id
    #staatus
    constructor(nimi, id) {
        this.#nimi = nimi
        this.#id = id
        this.#staatus = "Active"
    }
    getId() {
        return this.#id
    }
    setName(name) {
        this.#nimi = name
    }
    getName() {
        return this.#nimi
    }
    setStatus(status) {
        if (status === "Active" || status === "Expelled" || status === "Finished" || status === "Inactive") {
            this.#staatus = status
        }
    }
    getStatus() {
        return this.#staatus
    }
}