
class Person {
    constructor(name) {
        this.name = name       
        this.year = null
    }

    setDateOfBirth(year) {
        this.year = year
    }

    getDateOfBirth(year) {
        return this.year
    }

    age() {
        return new Date().getFullYear() - this.year
    }

    getName() {
        return this.name
    }

    description() {
        return `Nimi: ${this.getName()}, Synniaasta: ${this.getDateOfBirth()}, Vanus: ${this.age()}.`
    }
}

module.exports = Person