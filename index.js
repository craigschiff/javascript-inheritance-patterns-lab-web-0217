function inherit(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}


function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.constructor = Point

Point.prototype.toString = function() {
    return `${this.x}, ${this.y}`
  }

function Shape() {
  }

Shape.prototype.constructor = Point

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
}


function Circle(radius) {
  this.radius = radius
}

// Circle.prototype.diameter = function(this.radius) {



function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function() {
  return this.radius * 2
}

Circle.prototype.area = function() {
   return Math.PI * this.radius^2
 }

 Circle.prototype.area = function() {
   return 2 * Math.PI * this.radius
}

function Polygon (sides) {
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)

Polygon.prototype.constructor = Polygon
Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

Polygon.prototype.perimeter = function() {
  return this.sides.reduce(function(total, side) {
    return total + side.length
  }, 0)
}

function Quadrilateral (a, b, c, d) {
  Polygon.call(this, this.sides)
  this.sides = new Array
  this.sides.push(new Side(a))
  this.sides.push(new Side(b))
  this.sides.push(new Side(c))
  this.sides.push(new Side(d))
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral
function Side (length) {
  this.length = length
}


function Rectangle (width, height) {
  Quadrilateral.call(this, width, width, height, height)

  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.numberOfSdies = function() {
  return 4
}

Rectangle.prototype.area = function() {
  return this.width * this.height
}



function Square(length) {
  this.width = length
  this.height = length
  Rectangle.call(this, length, length)

}




Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

// Square.prototype.numberOfSides = function() {
//   return 4
// }
// Square.prototype.area = function() {
//   return this.height * this.height
// }
//
// Square.prototype.perimeter = function() {
//   return this.height * 4
// }
