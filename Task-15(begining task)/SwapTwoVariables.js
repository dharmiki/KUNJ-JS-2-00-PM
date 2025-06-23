let a = 10;
let b = 20;

console.log("Before Swap:");
console.log("a =", a, "b =", b);

// Using a third variable
let temp = a;
a = b;
b = temp;

console.log("After Swap:");
console.log("a =", a, "b =", b);
