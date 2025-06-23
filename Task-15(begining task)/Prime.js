let num = 17;
let isPrime = true;
let k = 2;

while (k < num) {
  if (num % k === 0) {
    isPrime = false;
    break;
  }
  k++;
}

if (num < 2) isPrime = false;

console.log(num, "is prime?", isPrime); // Output: true
