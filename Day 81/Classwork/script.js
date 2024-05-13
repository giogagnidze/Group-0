//1

function manualMap(lst, func) {
    return lst.map(func);
}
let numbers = [1, 2, 3, 4, 5];
let square = x => x ** 2;
let squaredNumbers = manualMap(numbers, square);
console.log(squaredNumbers); 

//2

const customMap = (numbers, subFunc) => numbers.map((n, i) => i % 2 ? n : subFunc(n));

let numbers = [1, 2, 3, 4, 5];
let square = x => x ** 2;
let squaredEvenIndices = customMap(numbers, square);
console.log(squaredEvenIndices); 