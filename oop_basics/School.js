
class School {
    constructor(name) {
        this.name = name
        this.students = []
        this.courses = []
    }

    addCourse(course) {
        if (this.courses.indexOf(course) === -1) {
            this.courses.push(course)
        }
    }

    getCourses() {
        return this.courses
    }

    addStudent(student) {
        if ((student.age() > 18) && (this.students.indexOf(student) === -1)) {
            student.setId(Math.random())
        }
    }

    getStudents() {
        return this.students
    }

    addStudenGrade(student, course, grade) {
        if (this.students.indexOf(student) !== -1 && (this.courses.indexOf(course) !== -1)) {
            course.addGrade(course, grade)
            student.addGrade(grade)
        }
    }
}

module.exports = School