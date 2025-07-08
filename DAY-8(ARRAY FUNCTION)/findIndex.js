const numbers=[7,14,21,28,35]
const index=numbers.findIndex(num => num%7 === 0 && num>20)

console.log(index)