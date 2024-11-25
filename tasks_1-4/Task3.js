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

const student = new Student('taavi', 101)
console.log(`${student.getName()}, ${student.getId()}, ${student.getStatus()}`)
student.setName('laura')
student.setStatus('Expelled')
console.log(`${student.getName()}, ${student.getId()}, ${student.getStatus()}`)