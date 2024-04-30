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