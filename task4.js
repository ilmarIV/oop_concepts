class Shape {
    constructor(color) {
        this.color = color
    }

    setColor(color) {
        
        this.color = color
    }
    getColor() {
        return this.color
    }

    getArea() {
        return null
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }

    getArea() {
        return Math.PI * this.radius**2
    }

    print() {
        return `Circle(r: ${this.radius}, color: ${this.color})`
    }
}

class Square extends Shape {
    constructor(color, side) {
        super(color)
        this.side = side
    }

    getArea() {
        return this.side**2
    }

    print() {
        return `Square(a: ${this.side}, color: ${this.color})`
    }
}

class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color)
        this.length = length
        this.width = width        
    }

    getArea() {
        return this.length * this.width
    }

    print() {
        return `Rectangle(l: ${this.length}, w: ${this.width}, color: ${this.color})`
    }
}

class Paint {
    constructor(shapes) {
        this.shapes = shapes
    }

    addShape(shape) {
        this.shapes.push(shape)
    }

    getShapes() {
        return this.shapes
    }

    calculateTotalArea() {
        let totalArea = 0
        this.shapes.forEach(element => {
            totalArea += element.getArea()
        })
        return totalArea
    }

    getCircles() {
        let circlesArray = []
        this.shapes.forEach(element => {
            if (element instanceof Circle) {
                circlesArray.push(element)
            }
        })
        return circlesArray
    }

    getSquares() {
        let squaresArray = []
        this.shapes.forEach(element => {
            if (element instanceof Square) {
                squaresArray.push(element)
            }
        });
        return circlesArray
    }

    getRectangles() {
        let rectanglesArray = []
        this.shapes.forEach(element => {
            if (element instanceof Rectangle) {
                rectanglesArray.push(element)
            }
        })
        return circlesArray
    }
}

const blueCircle = new Circle('blue', 5)
const redCircle = new Circle('red', 10)
console.log(blueCircle.print())
console.log(redCircle.print())

const blueSquare = new Square('blue', 5)
const redSquare = new Square('red', 10)
console.log(blueSquare.print())
console.log(redSquare.print())

const blueReactangle = new Rectangle('blue', 5, 5)
const redReactangle = new Rectangle('red', 10, 10)
console.log(blueReactangle.print())
console.log(redReactangle.print())

const paint = new Paint([blueCircle, redCircle, blueReactangle, redReactangle])
console.log(paint.getShapes())
paint.addShape(blueSquare)
paint.addShape(redSquare)
console.log(paint.getShapes())

let area = paint.calculateTotalArea()
console.log(area)

let circles = paint.getCircles()
console.log(circles)