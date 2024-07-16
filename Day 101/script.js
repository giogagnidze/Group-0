// Function declarations and Arrow Functions:

// 1. Write a function that takes two numbers and returns their sum.

function sum(a, b) {
    return a + b;
}

// 2. Create a function that accepts a string and returns the string reversed.

function sum(a, b) {
    return a + b;
}

// 3. Implement a function that checks if a given number is even.

function isEven(num) {
    return num % 2 === 0;
}

// 4. Write an arrow function that takes an array and returns its length.

const getArrayLength = (arr) => arr.length;

// 5. Create an arrow function that calculates the area of a rectangle given its width and height.

const calculateArea = (width, height) => width * height;

// 6. Write a function that takes an array of numbers and returns a new array with each number doubled.

function doubleArray(arr) {
    return arr.map(num => num * 2);
}

// 7. Implement a function that takes a string and returns it in uppercase.

function toUpperCase(str) {
    return str.toUpperCase();
}

// 8. Create an arrow function that filters out all odd numbers from an array.

const filterOddNumbers = (arr) => arr.filter(num => num % 2 === 0);

// 9. Write a function that accepts a number and returns its factorial.

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// 10. Create an arrow function that takes a string and returns the number of vowels in the string.

const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
};




// Template Literals:

// 1. Create a template literal that includes a variable in a sentence.

const name = "Gio";
const greeting = `Hello, ${name}! Welcome to the website.`;
console.log(greeting); 


// 2. Use a template literal to create a multiline string.

const multilineString = `This is the first line.
This is the second line.
This is the third line.`;
console.log(multilineString);

// 3. Write a template literal that embeds an expression to calculate the sum of two numbers.

const num1 = 5;
const num2 = 10;
const sum = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
console.log(sum);


// 4. Create a template literal to format a date using variables for day, month, and year.

const day = 16;
const month = 7;
const year = 2024;
const formattedDate = `Today's date is ${month}/${day}/${year}.`;
console.log(formattedDate);


// 5. Use a template literal to construct a URL from variables for the protocol, domain, and path.

const protocol = "https";
const domain = "example.com";
const path = "path/to/page";
const url = `${protocol}://${domain}/${path}`;
console.log(url); 

// 6. Create a template literal that includes a conditional expression.
const isMember = true;
const message = `You are ${isMember ? 'a' : 'not a'} member of the club.`;
console.log(message);


// 7. Write a template literal that formats an address using variables for street, city, and zip code.

const street = "123 Main St";
const city = "Rustavi";
const zip = "3700";
const address = `${street}, ${city}, GA ${zip}`;
console.log(address); 

// 8. Use a template literal to create a simple HTML structure with a variable for the content.

const content = "This is a paragraph.";
const html = `<div>
  <p>${content}</p>
</div>`;
console.log(html);

// 9. Create a template literal that includes a loop to generate a list of items from an array.

const items = ["Item 1", "Item 2", "Item 3"];
const list = `<ul>
  ${items.map(item => `<li>${item}</li>`).join('')}
</ul>`;
console.log(list);

// 10. Write a template literal that interpolates a function call and includes its result in a sentence.

function getGreeting(name) {
    return `Hello, ${name}!`;
  }
  
  const name = "Gio";
  const message = `${getGreeting(name)} Welcome to the website.`;
  console.log(message); 


//   Short Conditionals:

//   1. Use the `&&` operator to conditionally log a message if a variable is true.

const isLoggedIn = true;
isLoggedIn && console.log("User is logged in."); 

//   2. Use the `||` operator to set a default value for a variable if it is falsy.

const username = null;
const displayName = username || "Guest";
console.log(displayName);

//   3. Use the ternary operator to assign a value based on a condition.

const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); 

//   4. Write a short conditional using the `&&` operator to call a function only if a variable is not null.

const user = { name: "Gio" };
user && console.log(`User name is ${user.name}.`); 

//   5. Use the `||` operator to return the first truthy value from a list of variables.

const value1 = null;
const value2 = 0;
const value3 = "Hello";
const result = value1 || value2 || value3;
console.log(result);

//   6. Use the ternary operator to log different messages based on whether a number is positive or negative.

const number = -5;
const message = number >= 0 ? "Positive" : "Negative";
console.log(message); 

//   7. Write a short conditional using the `&&` operator to add a class to an element if a condition is met.

const isActive = true;
const elementClass = isActive && "active";
console.log(elementClass);

//   8. Use the `||` operator to provide a fallback value for a missing object property.

const config = { theme: null };
const theme = config.theme || "default";
console.log(theme); 

//   9. Use the ternary operator to set the value of a variable based on the length of a string.

const input = "Hello";
const lengthCheck = input.length > 5 ? "Long" : "Short";
console.log(lengthCheck); 

//   10. Write a short conditional using the `&&` operator to execute a block of code only if multiple conditions are true.

const isMember = true;
const hasPaid = true;
isMember && hasPaid && console.log("Access granted.");

  
//   Array method map():
  
//   1. Use the `map` function to create a new array with each element doubled.

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

//   2. Apply the `map` function to convert an array of strings to uppercase.

const strings = ["hello", "world"];
const uppercased = strings.map(str => str.toUpperCase());
console.log(uppercased);

//   3. Use the `map` function to extract a specific property from an array of objects.

const users = [{ name: "gio" }, { name: "gela" }];
const names = users.map(user => user.name);
console.log(names);
//   4. Implement the `map` function to add 5 to each element in an array of numbers.

const numbers = [10, 20, 30];
const incremented = numbers.map(num => num + 5);
console.log(incremented); 

//   5. Use the `map` function to convert an array of numbers to their square roots.

const numbers = [4, 9, 16];
const roots = numbers.map(num => Math.sqrt(num));
console.log(roots); 

//   6. Apply the `map` function to format an array of dates into a readable string format.

const dates = [new Date(2020, 1, 1), new Date(2021, 1, 1)];
const formattedDates = dates.map(date => date.toDateString());
console.log(formattedDates); 

//   7. Use the `map` function to create a new array with the lengths of each string in an array of strings.

const strings = ["apple", "banana", "cherry"];
const lengths = strings.map(str => str.length);
console.log(lengths); 
//   8. Implement the `map` function to prepend a string to each element in an array of strings.

const strings = ["apple", "banana", "cherry"];
const prefixed = strings.map(str => `fruit: ${str}`);
console.log(prefixed);

//   9. Use the `map` function to create an array of boolean values indicating whether each number in an array is even.

const numbers = [1, 2, 3, 4];
const isEven = numbers.map(num => num % 2 === 0);
console.log(isEven); 

//   10. Apply the `map` function to replace specific characters in each string of an array. 

const strings = ["hello", "world"];
const replaced = strings.map(str => str.replace('l', '1'));
console.log(replaced);




// Array method filter():

// 1. Use the `filter` function to create a new array with only even numbers.

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 

// 2. Apply the `filter` function to extract all strings longer than 5 characters from an array.

const strings = ["apple", "banana", "cherry", "date"];
const longStrings = strings.filter(str => str.length > 5);
console.log(longStrings);

// 3. Use the `filter` function to create a new array with objects that have a specific property value.

const items = [
    { name: "Gio", age: 25 },
    { name: "Gela", age: 30 },
    { name: "Data", age: 25 }
  ];
  const age25 = items.filter(item => item.age === 25);
  console.log(age25); 
  
// 4. Implement the `filter` function to remove all null or undefined values from an array.

const values = [1, null, 2, undefined, 3, null, 4];
const filteredValues = values.filter(value => value != null);
console.log(filteredValues); 

// 5. Use the `filter` function to select all numbers greater than 10 from an array of numbers.

const numbers = [5, 15, 10, 20, 8];
const greaterThanTen = numbers.filter(num => num > 10);
console.log(greaterThanTen); 

// 6. Apply the `filter` function to create an array of words that start with a specific letter.

const words = ["apple", "banana", "apricot", "cherry"];
const startsWithA = words.filter(word => word.startsWith("a"));
console.log(startsWithA);

// 7. Use the `filter` function to extract all prime numbers from an array of numbers.

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);

// 8. Implement the `filter` function to create an array of users who are over a certain age from an array of user objects.

const users = [
    { name: "Gio", age: 25 },
    { name: "Dara", age: 20 },
    { name: "Dato", age: 30 }
  ];
  const over21 = users.filter(user => user.age > 21);
  console.log(over21); 
  
// 9. Use the `filter` function to remove duplicate values from an array.

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueNumbers);

// 10. Apply the `filter` function to create a new array with only truthy values.

const values = [0, 1, false, 2, "", 3, null, 4, undefined, 5];
const truthyValues = values.filter(Boolean);
console.log(truthyValues);

// Array method reduce():

// 1. Use the `reduce` function to calculate the sum of an array of numbers.

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// 2. Apply the `reduce` function to concatenate an array of strings into a single string.

const strings = ["Hello", " ", "World", "!"];
const concatenated = strings.reduce((acc, str) => acc + str, "");
console.log(concatenated); 

// 3. Use the `reduce` function to find the maximum value in an array of numbers.

const numbers = [1, 2, 3, 4, 5];
const max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);
console.log(max); 

// 4. Implement the `reduce` function to count the occurrences of each element in an array.

const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(count);

// 5. Use the `reduce` function to calculate the total price of items in a shopping cart array.

const cart = [
    { item: "apple", price: 1.2 },
    { item: "banana", price: 0.8 },
    { item: "orange", price: 1.5 }
  ];
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  console.log(totalPrice); 
  
// 6. Apply the `reduce` function to create an object grouping array elements by a specific property.

const people = [
    { name: "Gio", age: 25 },
    { name: "Data", age: 30 },
    { name: "Gela", age: 25 }
  ];
  const groupedByAge = people.reduce((acc, person) => {
    const { age } = person;
    acc[age] = acc[age] || [];
    acc[age].push(person);
    return acc;
  }, {});
  console.log(groupedByAge);
  
// 7. Use the `reduce` function to flatten a nested array into a single-level array.

const nestedArray = [[1, 2], [3, 4], [5]];
const flattened = nestedArray.reduce((acc, val) => acc.concat(val), []);
console.log(flattened); 

// 8. Implement the `reduce` function to calculate the product of an array of numbers.

const numbers = [1, 2, 3, 4];
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product);

// 9. Use the `reduce` function to merge an array of objects into a single object.

const objects = [
    { a: 1, b: 2 },
    { c: 3, d: 4 },
    { e: 5, f: 6 }
  ];
  const merged = objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
  console.log(merged); 
  
// 10. Apply the `reduce` function to create an array of unique values from an array with duplicates.

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueValues = numbers.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, []);
console.log(uniqueValues);




// Object trics:

// 1. Create an object using property shorthand notation.

const name = "Gio";
const age = 25;
const person = { name, age };
console.log(person); 

// 2. Use object destructuring to extract properties from an object into variables.

const person = { name: "Gio", age: 30 };
const { name, age } = person;
console.log(name, age)

// 3. Implement the spread operator to merge two objects into a new object.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); 

// 4. Use destructuring to swap the values of two properties in an object.

let obj = { x: 1, y: 2 };
[obj.x, obj.y] = [obj.y, obj.x];
console.log(obj);

// 5. Create a function that takes an object as a parameter and uses destructuring to access its properties.

const displayPerson = ({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
  };
  const person = { name: "Gio", age: 35 };
  displayPerson(person); 
  
// 6. Use the spread operator to create a shallow copy of an object.

const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy); 
// 7. Implement the spread operator to add new properties to an existing object.

const obj = { a: 1, b: 2 };
const updatedObj = { ...obj, c: 3 };
console.log(updatedObj); 

// 8. Use destructuring to assign default values to properties when they are missing from an object.

const person = { name: "Gio" };
const { name, age = 25 } = person;
console.log(name, age); 

// 9. Create an object with a dynamic property name using a variable.

const propName = "dynamicProp";
const obj = { [propName]: "value" };
console.log(obj); 

// 10. Use object destructuring in a function's parameter list to extract specific properties from an argument object.

const logPerson = ({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
  };
  const person = { name: "Gio", age: 40 };
  logPerson(person);
  

// Promises + Async/Await Syntax:

// 1. Create a promise that resolves after 2 seconds and use `then` to log a message.

const promise = new Promise(resolve => {
    setTimeout(() => resolve("Resolved!"), 2000);
  });
  promise.then(message => console.log(message));
  
// 2. Write an async function that waits for a promise to resolve and then logs the result.

const waitForPromise = async () => {
    const result = await promise;
    console.log(result);
  };
  waitForPromise(); 
  
// 3. Create a promise that rejects with an error and use `catch` to handle the error.

const errorPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Something went wrong!")), 2000);
  });
  errorPromise.catch(error => console.error(error.message)); 
  
// 4. Write an async function that uses `try` and `catch` to handle errors from an awaited promise.

const handlePromise = async () => {
    try {
      const result = await errorPromise;
    } catch (error) {
      console.error(error.message);
    }
  };
  handlePromise(); 
  
// 5. Chain multiple promises together using `then` and `catch` to handle any errors.

const firstPromise = Promise.resolve(1);
const secondPromise = num => Promise.resolve(num + 1);
firstPromise
  .then(secondPromise)
  .then(result => console.log(result))
  .catch(error => console.error(error));

// 6. Write an async function that waits for multiple promises to resolve using `Promise.all`.

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const waitForAll = async () => {
  const results = await Promise.all([promise1, promise2]);
  console.log(results);
};
waitForAll(); 
// 7. Create a promise that resolves with a value and use `then` to transform the value before logging it.

const transformPromise = Promise.resolve(5);
transformPromise
  .then(value => value * 2)
  .then(transformedValue => console.log(transformedValue));

// 8. Write an async function that uses `await` to fetch data from an API and logs the result.

const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData();

// 9. Use `Promise.race` to handle multiple promises and log the first one to resolve.

const promise1 = new Promise(resolve => setTimeout(() => resolve("First"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Second"), 2000));
Promise.race([promise1, promise2]).then(result => console.log(result)); 

// 10. Write an async function that retries a failed promise a specified number of times before rejecting. 

const retryPromise = (fn, retries) => new Promise((resolve, reject) => {
    const attempt = async (n) => {
      try {
        const result = await fn();
        resolve(result);
      } catch (error) {
        if (n === 0) {
          reject(error);
        } else {
          attempt(n - 1);
        }
      }
    };
    attempt(retries);
  });
  
  const failThreeTimes = (() => {
    let attempts = 0;
    return () => new Promise((resolve, reject) => {
      attempts += 1;
      if (attempts < 4) {
        reject(new Error("Failed"));
      } else {
        resolve("Success");
      }
    });
  })();
  
  const retry = async () => {
    try {
      const result = await retryPromise(failThreeTimes, 3);
      console.log(result); 
    } catch (error) {
      console.error("Failed after retries:", error);
    }
  };
  retry();
  


// ES Modules + Import / Export syntax:


// 1. Create a module that exports a default class and import it in another file.

export default class MathOperations {
    static add(a, b) {
      return a + b;
    }
  }
  import MathOperations from './math.js';
  console.log(MathOperations.add(2, 3)); // Output: 5
  
// 2. Create a module that exports constants and import them in another file to perform calculations.


export const PI = 3.14159;
export const E = 2.71828;

import { PI, E } from './constants.js';
const areaOfCircle = (radius) => PI * radius * radius;
const exponential = (x) => Math.pow(E, x);
console.log(areaOfCircle(2));
console.log(exponential(2)); 
