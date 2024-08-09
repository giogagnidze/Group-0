
// 1
const people = [{name: 'Alice', age: 20}, {name: 'Boba', age: 10}, {name: 'Charlie', age: 22}];
const names = people.map(person => person.name);
console.log(names); 

// 2
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeOrNot = numbers.map(num => isPrime(num));
console.log(primeOrNot); 

// 3
const students = [{name: 'Alice', grade: 85}, {name: 'Boba', grade: 75}, {name: 'Charlie', grade: 90}];
const passedStudents = students.filter(student => student.grade >= 80);
console.log(passedStudents);

// 4
const fileNames = ['document.txt', 'image.jpg', 'presentation.pptx', 'photo.jpg'];
const jpgFiles = fileNames.filter(fileName => fileName.endsWith('.jpg'));
console.log(jpgFiles); 

// 5
function mapCopy(func, iterable) {
    return iterable.map(func);
}

const originalList = [1, 2, 3, 4];
const copiedList = mapCopy(x => x * 2, originalList);
console.log(copiedList); 

// 6
function filterCopy(func, iterable) {
    return iterable.filter(func);
}
const originalList2 = [1, 2, 3, 4, 5, 6];
const copiedList2 = filterCopy(x => x % 2 === 0, originalList2);
console.log(copiedList2); 

function manualFilter(filterFunction, array) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (filterFunction(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

function exampleFilter(value) {
    return value > 50;
}

let numbers = [20, 30, 40, 50, 60, 70, 80];

let filteredNumbers = manualFilter(exampleFilter, numbers);
console.log(filteredNumbers); 



function manual_map(mapFunction, array) {
    let mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(mapFunction(array[i]));
    }
    return mappedArray;
}

const originalArray = [1, 'apple', 2, 'banana', 3, 'cherry', 4, 'date'];

function filterIntegers(element) {
    return Number.isInteger(element);
}

const integersArray = originalArray.filter(filterIntegers);

console.log(integersArray);


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplyByTwo(value, index) {
    return index % 2 === 0 ? value * 2 : value;
}

const modifiedNumber = number.map(multiplyByTwo);

console.log(modifiedNumber);

