function normal() {
    console.log("Normal function")
}
normal()

console.log("-------------------------")

let anonymous = function() {
    console.log("anonymous function")
}
anonymous()

console.log("-------------------------")

let arrow = (()=>{
    console.log("arrow function")
})
arrow()

console.log("-------------------------")

function outer() {
    function inner() {
        console.log("nested function")
    }
    inner()
}
outer()

console.log("-------------------------")

function outer2() {
    let count = 0
    function inner2() {
        count++
        console.log(count)
    }
    return inner2
}
let print = outer2()
print()
print()
print()