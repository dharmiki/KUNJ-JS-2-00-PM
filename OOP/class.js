class Person {
    constructor(name, age) {
        this.name = name; 
        this.age = age;   
    }

    greet() {
        console.log(`My name is ${this.name}.`);
    }
}

// Creating objects using the class
let person1 = new Person("Miki", 25);
let person2 = new Person("Mouse", 30);

// Accessing properties
console.log(person1.name); 
console.log(person2.age);  

// Calling the greet method
person1.greet(); 
person2.greet(); 