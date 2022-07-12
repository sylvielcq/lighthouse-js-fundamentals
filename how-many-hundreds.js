function howManyHundreds(num) {
  let remainder = num % 100;
  let numMinusRemainder = num - remainder;
  let hundreds = numMinusRemainder / 100
  return hundreds
}

console.log(howManyHundreds(-1000))