class Person {
    constructor() {
        this.firstname = ""
        this.lastname = ""
        this.age = 0
    }
}

class Student {
    constructor(firstname, lastname, age) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
}

const taavi = new Person()
taavi.firstname = "Taavi"
taavi.lastname = "Taavi"
taavi.age = 50

const taavet = new Person()
taavi.firstname = "Taavet"
taavi.lastname = "Taavet"
taavi.age = 27

const tuuli = new Person()
taavi.firstname = "Tuuli"
taavi.lastname = "Tuuli"
taavi.age = 10

const mikk = new Student("Mikk", "Mikk", 22)
const mait = new Student("Mait", "Mait", 10)
const manni = new Student("Manni", "Manni", 100)