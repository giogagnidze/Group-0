//Create an object named person with properties name, age, and city.

let person = {
    name: "Gio",
    age: 15,
    city: "Rustavi"
}
console.log(person)

//Access the name property of the person object you created in the previous exercise.

console.log(person.name)

//Change the age property of the person object to a new value.

person.age = 18
console.log(person.age)

//Add a new property named country to the person object and set its value.

person.country = "Georgia"
console.log(person.country)

//Add a method named greet to the person object that logs a greeting message including the person's name.

person = {
    name: "Gio",
    age: 15,
    city: "Rustavi",
    greet: function() {
      console.log("Hello, my name is " + person.name);
    }
  };
person.greet();

//Create two objects with the same properties and values. Use the === operator to compare them. Log the result.

const obj1 = { 
    name: "giorgi", 
    lastname: "gagnidze",
    age: 15
}
const obj2 = { 
    name: "giorgi", 
    lastname: "gagnidze",
    age: 15
}
console.log(obj1 === obj2);


//Create an object named school with properties name and students, where students is an array of objects representing student names and ages. Access a student's name and age from the school object.


const school = {
    name: "5th public school",
    students: [
        student1 = { 
            name: "Gela", 
            age: 15
        },
        student2 = { 
            name: "Dati", 
            age: 13 
        },
        student3 ={ 
            name: "Nika", 
            age: 16
        }
    ]
}
const student1Name = school.students[0].name;
const student1Age = school.students[0].age;
const student2Name = school.students[1].name;
const student2Age = school.students[1].age;
const student3Name = school.students[2].name;
const student3Age = school.students[2].age;
console.log("Student Name:", student1Name); 
console.log("Student Age:", student1Age);  
console.log("Student Name:", student2Name); 
console.log("Student Age:", student2Age);  
console.log("Student Name:", student3Name); 
console.log("Student Age:", student3Age);  


//Create an object called calculator with methods add, subtract, multiply, and divide that perform basic arithmetic operations on two numbers.

const calculator = {
    add: function(num1, num2) {
        return(num1 + num2)
    },
    subtract: function(num1, num2) {
        return(num1 - num2)
    },
    multiply: function(num1, num2) {
        return(num1 * num2)
    },
    divide: function(num1, num2) {
        return(num1 / num2)
    }
}

console.log("Addition: ", calculator.add(5, 3))
console.log("Subtraction: ", calculator.subtract(10, 4))
console.log("Multiplication: ", calculator.multiply(6, 7))
console.log("Division: ", calculator.divide(10, 2))    

//