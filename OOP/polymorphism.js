// polymorphism
class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing a square");
  }
}

let shapes = [new Circle(), new Square()];

shapes.forEach(shape => shape.draw());

// Output:

// Drawing a circle
// Drawing a square