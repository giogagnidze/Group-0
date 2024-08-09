function sumArray(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}


function logArrayElements(arr) {
    arr.forEach((element, index) => {
        console.log(`index ${index}: ${element}`);
    });
}


function productOfArray(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
}


function mergeArrays(arr) {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
}


function manualForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

function manualReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    for (let i = initialValue === undefined ? 1 : 0; i < arr.length; i++){
        accumulator= callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}


function countWordFrequencies(arr) {
    return arr
        .flatMap(sentence => sentence.split(' '))
        .reduce((acc, word) => {
            acc[word] = (acc[word] || 0) + 1;
            return acc;
        }, {});
}