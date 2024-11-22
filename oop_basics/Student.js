const Person = require("./Person")

class Student extends Person {
    constructor(name) {
        super(name)
        this.id = null
        this.grades = []
    }

    setId(id) {
        if (!this.id) {
            this.id = id
        }
    }

    getId() {
        return this.id
    }

    studentAddGrade(course, grade) {
        const newGrade = {
            course: course,
            grade: grade
        }
        this.grades.push(newGrade)
    }

    getGrades() {
        return this.grades
    }

    getAverageGrade() {
        const len = this.getGrades().length
        if (len) {
            sum = 0
            this.getGrades().forEach(element => {
                sum += element.getGrade()
            })
            return sum / len
        }
        return -1
    }

    description() {
        return `Nimi: ${this.name}, ID: ${this.getId()}, Hinded: ${this.getGrades()}.`
    }
}

module.exports = Student