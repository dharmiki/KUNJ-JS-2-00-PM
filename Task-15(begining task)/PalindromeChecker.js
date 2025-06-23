let word = "madam";
let reversed = "";
let l = word.length - 1;

while (l >= 0) {
  reversed += word[l];
  l--;
}

let isPalindrome = word === reversed;

console.log("Is Palindrome?", isPalindrome); // Output: true
