//bubble sort
let arr = [5, 2, 9, 1, 3];
let temp;
let i = 0;

while (i < arr.length) {
  let j = 0;
  while (j < arr.length - i - 1) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
    j++;
  }
  i++;
}

console.log("Sorted:", arr); // Output: [1, 2, 3, 5, 9]
