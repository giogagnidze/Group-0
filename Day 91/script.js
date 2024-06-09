// Assign:

// 1. Create an object person, with properties: name and age. Use Object.assign to create a new object employee with additional property - position.

const person = {
    name: 'gio',
    age: 16
};

const employee = Object.assign({}, person, { position: 'programmer' });
console.log(employee);


// 2. Merge two objects obj1 and obj2 into a new object using Object.assign.

const obj1 = { 
    name: 'gio',
    age: 16
};
const obj2 = { 
    surname: 'gagnidze',
    height: 165
};

const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);

// 3. Copy properties from multiple source objects into a single target object using Object.assign.

const source1 = { 
    a: "a" 
};
const source2 = { 
    b: "b"
};
const source3 = { 
    c: "c"
};

const target = Object.assign({}, source1, source2, source3);
console.log(target);


// 4. Use Object.assign to clone an object original.

const original = { 
    name: "gela" 
};

const clone = Object.assign({}, original);
console.log(clone);


// 5. Merge properties of an object source into another object target using Object.assign.

const target = { 
    a: "a", 
    b: "b" 
};
const source = { 
    b: "g", 
    c: "c" 
};

Object.assign(target, source);
console.log(target);



// 6. Merge arrays of objects into a single object using Object.assign.

const arr = [{ 
    a: 1 
}, { 
    b: 2 
}, { 
    c: 3 
}];

const mergedFromArray = Object.assign({}, ...arr);
console.log(mergedFromArray);



// 7. Use Object.assign to update properties of an existing object with new values.

const existingObject = { 
    a: 1, 
    b: 2 
};
const updates = { 
    b: 100, 
    c: 200 
};

Object.assign(existingObject, updates);
console.log(existingObject);



// 8. Implement a function extend that takes two objects and merges their properties using Object.assign.

function extend(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const objA = { 
    a: 1 
};
const objB = { 
    b: 2 
};

const extendedObj = extend(objA, objB);
console.log(extendedObj);

// Rest:

// 1. Array Destructuring: Employ the rest operator to capture multiple elements of an array into a single variable.

const array = [1, 2, 3, 4, 5];

const [first, second, ...rest] = array;
console.log(first);  
console.log(second); 
console.log(rest);   


// 2. Collecting Function Arguments: Gather all remaining arguments into an array within a function.

function a(first, second, ...rest) {
    console.log(first);  
    console.log(second);
    console.log(rest);  
}

a(1, 2, 3, 4, 5);


// 3. Function Parameters: Use the rest parameter syntax (...args) within a function's parameter list to represent an indefinite number of arguments as an array.

function b(...args) {
    console.log(args);
}

b(1, 2, 3);  
b('a', 'b');


// 4. Forwarding Arguments: Capture all arguments passed to a function and forward them dynamically to another function using the rest parameter.

function c(...args) {
    console.log(args);
}

function d(...args) {
    console.log(args);
    c(...args);
}

d(10, 20, 30);


// 5. Object Destructuring: Utilize the rest operator in object destructuring to gather any remaining properties into a new object.

const obj = { 
    a: 1, 
    b: 2, 
    c: 3, 
    d: 4 
};

const { a, b, ...rest } = obj;
console.log(a);   
console.log(b);  
console.log(rest); 


// Spread:

// 1. Array Concatenation: Combine multiple arrays into a single array using the spread operator.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const combinedArray = [...array1, ...array2, ...array3];
console.log(combinedArray);



// 2. Object Merging: Merge properties from multiple objects into a new object using the spread operator.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

const obj = { ...obj1, ...obj2, ...obj3 };
console.log(obj);
