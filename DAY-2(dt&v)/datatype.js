//there are 7 datatype in javascript ( Number, string, boolean, undefined, null, bigint, symbol )

let a = 10
let b = "hello world"
let isPass = true
let c = undefined;
let d = null

let bigNum = BigInt("124") 
// let bigNum = 789451321654564897986518987564161899874118971 //we can also write like these 

//Bigint : javascript normally handles numbers using the number type (64 bit floating point). (if you need to work with numbers larger than that, use ( Bigint ) )


let sym = Symbol("hello!") 




console.log(typeof a) //using type of we can see type of data
console.log(typeof b)
console.log(typeof isPass)
console.log(typeof c)
console.log(typeof d)
console.log(typeof bigNum)
console.log(typeof sym)

