
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
            this.students.push(student)
        }
    }

    getStudents() {
        return this.students
    }

    addStudentGrade(student, course, grade) {
        if (this.students.indexOf(student) !== -1 && (this.courses.indexOf(course) !== -1)) {
            course.courseAddGrade(student, grade)
            student.studentAddGrade(course, grade)
        }
    }

    getStudentsOrderedByAverageGrade() {
        const quickSortStudents = (arr) => {
            const len = arr.length
            if (len <= 1) {
                return arr
            }
          
            let pivot = arr[0]
            let leftArr = []
            let rightArr = []
          
            for (let i = 1; i < len; i++) {
                if (arr[i].averageGrade < pivot.averageGrade) {
                    leftArr.push(arr[i])
                } else {
                    rightArr.push(arr[i])
                }
            }
                return [...quickSortStudents(leftArr), pivot, ...quickSortStudents(rightArr)]
        }

        const calculateAverageGrades = () => {
            let objArr = []
            this.students.forEach(student => {
                const newObj = {
                    student: student,
                    averageGrade: student.getAverageGrade()
                }
                objArr.push(newObj)
            })
            return objArr
        }

        const deconstructObject = (objArr) => {
            let studentArray = []
            objArr.forEach(element => {

                studentArray.push(element.student)
            })
            return studentArray
        }

        const averagestObjArr = calculateAverageGrades()
        const sortedObjArr = quickSortStudents(averagestObjArr)
        const sortedArr = deconstructObject(sortedObjArr)
        return sortedArr
    }
}

module.exports = School