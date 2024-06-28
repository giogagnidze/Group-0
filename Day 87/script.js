// every:

// 1.All Numbers Positive: Check if every number in an array is positive.
function positive(number) {
    return number > 0;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(every(numbers, positive));

const numbersWithNegative = [1, -2, 3, 4, -5, 6, -7, -8, 9, -10];
console.log(every(numbersWithNegative, positive)); 



// All String Non-Empty: Verify if every string in an array is non-empty.
function nonEmpty(str) {
    return str.length > 0;
}
  
const string = ["hello", "hi", "ola"];
console.log(every(string, nonEmpty)); 

const stringWithEmpty = ["hello", "", "ola"];
console.log(every(stringWithEmpty, nonEmpty)); 



// All Booleans True: Confirm if every boolean in an array is true.

function isTrue(boolean) {
    return boolean === true;
}
  
const booleans = [true, true, true, true, true];
console.log(every(booleans, isTrue)); 

const booleansWithFalse = [true, false, true, false, false, true];
console.log(every(booleansWithFalse, isTrue)); 

// All Numbers Even: Check if every number in an array is even.


function isEven(number) {
    return number % 2 === 0;
}
  
const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(every(evenNumbers, isEven));

const numbersWithOdd = [2, 3, 6, 8,  ];
console.log(every(numbersWithOdd, isEven)); 

// Create manual function of every

// some:
// Has Passing Grades: Check if some grades in an array are above a passing level.
function grade(grade) {
    const passingGrade = 50;
    return grade > passingGrade;
}
  
const grades = [40, 55, 60, 30];
console.log(some(grades, grade)); 

const failingGrades = [40, 45, 48, 30];
console.log(some(failingGrades, grade)); 

// Contains Admin Users: Verify if some user objects in an array have the role of 'admin'.
function isAdmin(user) {
    return user.role === 'admin';
}
  
const users = [
    { 
        name: 'gela',
        role: 'user' 
    },
    { 
        name: 'jora',
        role: 'admin' 
    },
    { 
        name: 'jemala', 
        role: 'user' 
    }
];
console.log(some(users, isAdmin));

const noAdmins = [
    { 
        name: 'gela', 
        role: 'user' 
    },
    { 
        name: 'jora', 
        role: 'user' 
    },
    { 
        name: 'jemala', 
        role: 'user' 
    }
];
console.log(some(noAdmins, isAdmin)); 
  
// Has Overdue Items: Confirm if some objects in a list have an overdue property set to true.
function isOverdue(item) {
    return item.overdue === true;
}

const items = [
    { 
        name: 'Task 1', 
        overdue: false 
    },
    { 
        name: 'Task 2', 
        overdue: true
    },
    { 
        name: 'Task 3', 
        overdue: false 
    }
];
console.log(some(items, isOverdue)); 

const noOverdueItems = [
    { 
        name: 'Task 1', 
        overdue: false 
    },
    { 
        name: 'Task 2', 
        overdue: false 
    },
    { 
        name: 'Task 3', 
        overdue: false 
    }
];
console.log(some(noOverdueItems, isOverdue));

// Includes Prime Numbers: Check if some numbers in an array are prime numbers.
function isPrime(number) {
    if (number <= 1) 
        return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
  
  const numbers = [4, 6, 7, 9, 11 , 13, 15, 17];
  console.log(some(numbers, isPrime)); 
  
  const nonPrimeNumbers = [4, 6, 8, 9, 10, 13, 15];
  console.log(some(nonPrimeNumbers, isPrime)); 
  
// Create manual function of some




// find:
// Find First Negative Number: Identify the first negative number in an array.
function isNegative(number) {
    return number < 0;
}
  
const numbers = [3, 5, -2, 9, -4, 10, -19];
console.log(find(numbers, isNegative)); 

const positiveNumbers = [3, 5, 7, 9,11, 12, 141];
console.log(find(positiveNumbers, isNegative)); 
  
// Find User by ID: Return the first user object in an array with a specific ID.
function findUserById(id) {
    return function(user) {
        return user.id === id;
    };
}
  
  const users = [
    { 
        id: 1, 
        name: 'gela' 
    },
    { 
        id: 2, 
        name: 'jora' 
    },
    { 
        id: 3, 
        name: 'jemala' 
    }
  ];
console.log(find(users, findUserById(2)))

console.log(find(users, findUserById(4))); 

// Find First Incomplete Task: Locate the first task object in an array that has complete property set to incomplete.
function isIncomplete(task) {
    return task.complete === false;
}
  
const tasks = [
    { 
        id: 1, 
        name: 'Task 1', 
        complete: true 
    },
    { 
        id: 2, 
        name: 'Task 2', 
        complete: false 
    },
    { 
        id: 3,
         name: 'Task 3', 
         complete: true 
        }
];
console.log(find(tasks, isIncomplete))
  
const allCompleteTasks = [
    { 
        id: 1, 
        name: 'Task 1', 
        complete: true 
    },
    { 
        id: 2, 
        name: 'Task 2', 
        complete: true 
    }
];
console.log(find(allCompleteTasks, isIncomplete)); 
  
// Find Product by Name: Search for the first product in an array with a specific name.
function findProductByName(name) {
    return function(product) {
        return product.name === name;
    };
}
  
  const products = [
    { 
        id: 1, 
        name: 'aiphouni ;D' 
    },
    { 
        id: 2,
        name: 'phone' 
    },
    { 
        id: 3,
        name: 'laptop' 
    }
  ];
  console.log(find(products, findProductByName('phone'))); 
  
  console.log(find(products, findProductByName('camera')));
  
// Create manual function of find



// findIndex:
// Find Index of First Prime Number: Determine the index of the first prime number in an array of integers.

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
  
  const numbers = [4, 6, 8, 7, 10];
  console.log(findIndex(numbers, isPrime)); 
  
  const noPrimes = [4, 6, 8, 10];
  console.log(findIndex(noPrimes, isPrime)); 
  

// Find Index of User with Admin Role: Retrieve the index of the user object in an array with the role of 'admin'

function isAdmin(user) {
    return user.role === 'admin';
}
  
  const users = [
    { 
        name: 'gela',
         role: 'user' 
        },
    { 
        name: 'jora', 
        role: 'admin' 
    },
    { 
        name: 'jemala', 
        role: 'user' 
    }
  ];
  console.log(findIndex(users, isAdmin)); 
  
  const noAdmins = [
    { 
        name: 'gela', 
        role: 'user' 
    },
    { 
        name: 'jora', 
        role: 'user' 
    },
    { 
        name: 'jemala', 
        role: 'user' 
    }
  ];
  console.log(findIndex(noAdmins, isAdmin));
  

// Find Index of First Overdue Item: Identify the index of the first item in a list with an overdue property set to true.

function isOverdue(item) {
    return item.overdue === true;
}
  
const items = [
    { 
        name: 'Task 1', 
        overdue: false 
    },
    { 
        name: 'Task 2', 
        overdue: true 
    },
    { 
        name: 'Task 3', 
        overdue: false 
    }
];
  console.log(findIndex(items, isOverdue)); 
  
const noOverdueItems = [
    { 
        name: 'Task 1', 
        overdue: false 
    },
    { 
        name: 'Task 2', 
        overdue: false 
    },
    { 
        name: 'Task 3', 
        overdue: false 
    }
];
console.log(findIndex(noOverdueItems, isOverdue));  

// Find Index of Product Out of Stock: Search for the index of the first product object in an array with an inStock property set to false.

function isOutOfStock(product) {
    return product.inStock === false;
}
  
const products = [
    { 
        id: 1, 
        name: 'laptop', 
        inStock: true 
    },
    { 
        id: 2, 
        name: 'phone', 
        inStock: false 
    },
    { 
        id: 3, 
        name: 'rablet', 
        inStock: true 
    }
];
console.log(findIndex(products, isOutOfStock));
  
  const allInStock = [
    { 
        id: 1, name: ';aptop', 
        inStock: true 
    },
    { 
        id: 2, 
        name: 'phone', 
        inStock: true 
    },
    { 
        id: 3, 
        name: 'tablet', 
        inStock: true 
    }
];
console.log(findIndex(allInStock, isOutOfStock)); 
  

// Create manual function of findIndex


// indexOf:
// Index of First Occurrence of a Character: Find the index of the first occurrence of a specific character in a string.

function indexOfChar(string, char) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return i;
        }
    }
    return -1;
}
  
const str = "OLA AMIGO MAI NEIM IZ JORJ";
console.log(indexOfChar(str, 'o')); 
console.log(indexOfChar(str, 'z')); 
  

// Index of First Occurrence of a Number: Determine the index of the first occurrence of a specific number in an array.

const numbers = [10, 20, 30, 40, 30];
console.log(indexOf(numbers, 30));
console.log(indexOf(numbers, 50)); 


// Index of First Occurrence of a Substring: Find the index of the first occurrence of a specific substring in a string.

function indexOfSubstring(string, substring) {
    const len = substring.length;
    for (let i = 0; i <= string.length - len; i++) {
        if (string.slice(i, i + len) === substring) {
            return i;
        }
    }
    return -1;
}
  
const str2 = "OLA AMIGO MAI NEIM IZ JORJ";
console.log(indexOfSubstring(str2, 'world')); 
console.log(indexOfSubstring(str2, 'test'));


// Index of First Occurrence of an Element in an Array of Objects: Determine the index of the first occurrence of a specific element in an array of objects based on a particular property value.

function indexOfObject(array, property, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][property] === value) {
            return i;
        }
    }
    return -1;
}
  
  const products = [
    { 
        id: 1, 
        name: 'Laptop' 
    },
    { 
        id: 2, 
        name: 'Phone' 
    },
    { 
        id: 3, 
        name: 'Tablet' 
    }
  ];
console.log(indexOfObject(products, 'name', 'Phone')); 
console.log(indexOfObject(products, 'name', 'Camera')); 
