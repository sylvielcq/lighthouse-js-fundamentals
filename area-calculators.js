function calculateRectangleArea(length, width) {
  let rectangle;
  if (length >= 0 && width >= 0) {
    rectangle = length * width;
    return rectangle;
  } else {
    rectangle = "undefined";
  }
  
}

function calculateTriangleArea(base, height) {
  let triangle;
  if (base >= 0 && height >= 0) {
    triangle = (base * height) / 2;
    return triangle;
  } else {
    triangle = "undefined";
  }
}

function calculateCircleArea(radius) {
  let circle;
  if (radius >= 0) {
    circle = Math.PI * Math.pow(radius,2);
    return circle;
  } else {
    circle = "undefined";
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
