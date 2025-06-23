let str = "education";
let count = 0;
let vowels = "aeiouAEIOU";
let j = 0;

while (j < str.length) {
  if (vowels.indexOf(str[j]) !== -1) {
    count++;
  }
  j++;
}

console.log("Vowels:", count); // Output: Vowels: 5

