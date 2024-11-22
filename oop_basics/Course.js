
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
}

module.exports = Course