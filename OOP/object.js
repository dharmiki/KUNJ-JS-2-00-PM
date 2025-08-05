// object in js

let person1 = {
    name: "Miki",
    age: 28,
    introduce: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
};

let person2 = {
    name: "Mouse",
    age: 25,
    introduce: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
};

person1.introduce();
person2.introduce();