let arr = [2, 4, 5, 2, 7, 5, 8];
let duplicates = [];
let i = 0;

while (i < arr.length) {
  let j = i + 1;
  while (j < arr.length) {
    if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
    j++;
  }
  i++;
}

console.log("Duplicates:", duplicates); // Output: [2, 5]
