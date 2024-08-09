// 1) Countdown timer

let seconds = parseInt(prompt("Enter the number of seconds: "));
while (seconds > 0) {
    console.log(seconds);
    seconds--;
}
console.log("Time's up!");

// 2) Prime number printer

let prime = [];
let number = 1;

while (number <= 50) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && num > 1) {
        prime.push(num);
    }
    number++;
}
console.log(prime);

// 3) Object information display

let person = {
    name: "Giorgi",
    age: 15,
    occupation: "Proggraming"
};

console.log(`Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}`);

// 4) Calculate Factorial
let num = parseInt(prompt("Enter a integer:"));

let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(`Factorial of ${num} is ${factorial}`);

// 5) Array summation

let numbers = prompt("Enter numbers separated by spaces:").split(" ").map(Number);
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of the numbers is ${sum}`);

// 6) Fruit sasket

let fruits = [
    { 
        name: "Apple", 
        color: "Red" 
    },
    { 
        name: "Banana", 
        color: "Yellow" 
    },
    { 
        name: "Kiwi", 
        color: "Green" 
    }
];

for (let fruit of fruits) {
    console.log(fruit.name);
}

// 7) Car Inventory

let cars = [
    { 
        brand: "Toyota", 
        model: "Supra", 
        year: 2005 
    },
    { 
        brand: "Mazda", 
        model: "Rx7", 
        year: 2001
    },
    { 
        brand: "Nissan", 
        model: "GTR", 
        year: 2002
    }
];
for (let car of cars) {
    console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
}

// 8) Shopping List

let shoppingList = [
    { 
        name: "Milk", 
        quantity: 2 
    },
    { 
        name: "Bread", 
        quantity: 1 
    },
    { 
        name: "Eggs", 
        quantity: 12 
    }
];
for (let item of shoppingList) {
    console.log(`${item.name}: ${item.quantity}`);
}

// 9) Student Attendance Tracker

let students = [
    { 
        name: "Mate", 
        attendance: "Present" 
    },
    { 
        name: "Gela", 
        attendance: "Absent" 
    },
    { 
        name: "Giorgi", 
        attendance: "Present" 
    }
];
for (let student of students) {
    console.log(`Name: ${student.name}, Attendance: ${student.attendance}`);
}

// 10) Daily Planner

let tasks = [
    { 
        description: "Finish report", 
        priority: "High" 
    },
    { 
        description: "Buy groceries", 
        priority: "Medium" 
    },
    { 
        description: "Call mom", 
        priority: "Low" 
    }
];
for (let task of tasks) {
    console.log(`Description: ${task.description}, Priority: ${task.priority}`);
}