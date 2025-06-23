let year = 2024;
let isLeap = false;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  isLeap = true;
}

console.log(year, "is leap year?", isLeap); // Output: true
