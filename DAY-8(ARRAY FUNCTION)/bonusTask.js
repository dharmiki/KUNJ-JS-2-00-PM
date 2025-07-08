const numbers=["1","2","3","4","5","6","7","8","9","10"]

console.log("the even numbers is::");

//using filter function
const resultFilter=numbers.filter(num=>num%2===0);

console.log("the numbers square is::");

//using map function
const resultMap=resultFilter.map(num => num ** 2)

console.log(resultFilter)
console.log(resultMap)