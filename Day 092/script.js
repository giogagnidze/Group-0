// const signUpForm = document.getElementById("signup");
// const signInForm = document.getElementById("signin");

// const dataBase = []

// class Account {
//     #password;

//     constructor(email, password){
//         this.email = email;
//         this.#password = password;
//     }

//     get password(){
//         return this.#password;
//     }

// }

// signUpForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     dataBase.push(new Account(signUpForm.email.value, signUpForm.password.value));

//     alert("Account Succesfully created");

// })

// signInForm.addEventListener("submit", (e) => {
//     e.preventDefault()


//     const acc = dataBase.find((obj) => obj.email === signInForm.email.value);

//     if(acc.password === signInForm.password.name) alert("Succeesfully signin");
    

// })


// 1. Define a class called Person with properties like name, age, and gender.

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}


// 2. Create an object, using the Person class and assign it to a variable.

const person1 = new Person("Gio", 16, "Male");

// 3. Add methods to the Person class such as greet() to log a greeting.

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// 4. Access and log the properties of an object created in task2.

console.log(person1.name); 
console.log(person1.age);  
console.log(person1.gender); 

person1.greet();

// 5. Update the values of class properties in a new object.

const person2 = new Person("Jimshera", 18, "Male");
person2.name = "Jora";
person2.age = 11;

console.log(person2.name); 
console.log(person2.age); 
console.log(person2.gender); 

// 6. Create multiple objects, using the Person class and assign them to variables.

const person3 = new Person("xareba", 31, "Male");
const person4 = new Person("gogia", 30, "Male");

console.log(person3);
console.log(person4);

// 7. Define a getter method in a class that returns a specific property value.

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    getAge() {
        return this.age;
    }
}

// 8. Use a getter method to create a computed property that generates its value based on certain conditions or calculations.

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    get ageInDogYears() {
        return this.age * 7;
    }
}

const person5 = new Person("Gela", 20, "Male");
console.log(person5.ageInDogYears); 

// 9. Define a setter method in a class that sets the value of a specific property.

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    set updateAge(newAge) {
        this.age = newAge;
    }
}

const person6 = new Person("lasha", 29, "Male");
person6.updateAge = 51;
console.log(person6.age); 

// 10. Define a private property inside a class using the # prefix.

class Person {
    #ssn;

    constructor(name, age, gender, ssn) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.#ssn = ssn;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    getSSN() {
        return this.#ssn;
    }
}

const person7 = new Person("kai kaci", 120, "Male", "123-45-6789");
console.log(person7.getSSN()); 
