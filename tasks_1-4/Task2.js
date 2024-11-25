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
taavet.firstname = "Taavet"
taavet.lastname = "Taavet"
taavet.age = 27

const tuuli = new Person()
tuuli.firstname = "Tuuli"
tuuli.lastname = "Tuuli"
tuuli.age = 10

const mikk = new Student("Mikk", "Mikk", 22)
const mait = new Student("Mait", "Mait", 10)
const manni = new Student("Manni", "Manni", 100)

console.log(taavi)
console.log(taavet)
console.log(mikk)
