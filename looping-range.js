// Function that returns an array of numbers from start to end, counting by step
function range(start, end, step) {
  let numbers = [];
  let i;
  // Function should return an empty array [] if given incorrect parameters
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return numbers;
  }
  
  for (i = start; i <= end; i = i + step) {
    numbers.push(i);
  }
  return numbers;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));