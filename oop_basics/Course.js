
class Course {
    constructor(name) {
        this.name = name
        this.grades = []
    }

    courseAddGrade(student, grade) {
        const newGrade = {
            student: student,
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
            let sum = 0
            this.getGrades().forEach(element => {
                sum += element.grade
            })
            return sum / len
        }
        return -1
    }

    description() {
        return `Nimi: ${this.name}, Hinded: ${this.getGrades()}`
    }
}

module.exports = Course