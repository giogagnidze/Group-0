// Ask the user to input a number representing seconds.
// Using a while loop, countdown from the entered number to 1.
// Display each number as it counts down.
// Once the countdown reaches 1, console.log "Time's up!".

let seconds = Number(prompt("Enter the number of seconds to countdown:"));
while (seconds > 0) {
    console.log(seconds);
    seconds--;
}
console.log("Time's up!");


// Create an array.
// Start with the number 1.
// Using a while loop, iterate through numbers from 1 to 50.
// Check if the current number is Prime.
// If it is, add number to array.
// Continue to the next number and repeat until 50.
// Console.log array.

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let primeNumbers = [];
let number = 1;
while (number <= 50) {
    if (isPrime(number)) {
        primeNumbers.push(number);
    }
    number++;
}
console.log(primeNumbers);


// Create a program that displays basic information about a predefined object.
// Define an object representing a person with properties like name, age, and occupation.
// Display the information stored in the object to the user.

let person = {
    name: "Gio Gagnidze",
    age: 15,
    occupation: "Web Developer"
};
console.log("Person Information:");
console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("Occupation: " + person.occupation);


// Write a program that prompts the user to enter a non-negative integer.
// Use a for loop to calculate and display the factorial of that number.

function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

function main() {
    let num;
    let isValidInput = false;
    while (!isValidInput) {
        num = parseInt(prompt("Enter a non-negative integer:"));
        if (num >= 0) {
            isValidInput = true;
        } else {
            console.log("Please enter a valid non-negative integer.");
        }
    }
    console.log(`The factorial of ${num} is: ${calculateFactorial(num)}`);
}

main();

