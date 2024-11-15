class Student {
    constructor(name, finished=false) {
        this.name = name
        this.finished = finished
    }
}

const john = new Student("John")
console.log(john.name)
console.log(john.finished)