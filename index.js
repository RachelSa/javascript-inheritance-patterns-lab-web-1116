function Point(x,y){
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return (this.x + ", " + this.y)
}

function Shape(){

}


Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x, y)
  return this.position
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y)
}


function Circle(radius) {
  this.radius = radius
}

function Side(length) {
  this.length = length
}

function Polygon(sides) {
  //It should be constructed with an array of Side objects that have a length property
  this.sides = sides
}

function Quadrilateral(side1, side2, side3, side4){
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3), new Side(side4)])
}

function Rectangle(width, height){
  this.width = width
  this.height = height
  Quadrilateral.call(this, width, height, width, height)
}

function Square(length){
  this.length = length
  Rectangle.call(this, length, length)

}

function Triangle(side1, side2, side3){
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)])
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

Circle.prototype.area = function(){
   this.area = Math.PI * this.radius^2
   return this.area
}

Circle.prototype.diameter = function() {
  this.diameter = this.radius * 2
  return this.diameter
}

Circle.prototype.circumference = function(){
   this.circumference = Math.PI * this.radius * 2
   return this.circumference
}

Polygon.prototype.perimeter = function() {
  var perimeter = 0
  for (var i = 0; i < this.sides.length; i++){
    perimeter += this.sides[i]["length"]
    }
 return perimeter
//  return this.sides.map(function(side) {return side["length"]})
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

Rectangle.prototype.area = function () {
  return this.height * this.width
}

Square.prototype.listProperties = function() {
  for (var prop in this) {
  if(this.hasOwnProperty(prop)) {
    console.log("square " + prop + " = " + this[prop]);
    }
  }
}



 
var pointie = new Point(2,3)
var shapie = new Shape
var circlie = new Circle(2)
var side1 = new Side(1)
var side2 = new Side(1)
var side3 = new Side(2)
var side4 = new Side(2)
var poly = new Polygon([side1, side2, side3, side4])
var quad = new Quadrilateral(2, 2, 4, 4)
var rect = new Rectangle(5,4)