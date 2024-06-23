// 1. Create a promise that resolves to "Hello, World!" and log the result.

const promise1 = new Promise((resolve) => {
    resolve("Hello, World!");
});

promise1.then((message) => {
    console.log(message);
});

// 2. Create a promise that resolves after 2 seconds with the message "Resolved after 2 seconds".

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved after 2 seconds");
    }, 2000);
});

promise2.then((message) => {
    console.log(message); 
});

// 3. Chain two promises, where the first promise resolves to "First" and the second appends " -> Second".

const promise3 = new Promise((resolve) => {
    resolve("First");
});

promise3.then((message) => {
    return message + " -> Second";
}).then((newMessage) => {
    console.log(newMessage); 
});

// 4. Use multiple .then callbacks to handle different stages of promise resolution.

const promise4 = new Promise((resolve) => {
    resolve("Stage 1");
});

promise4.then((message) => {
    console.log(message); 
    return "Stage 2";
}).then((message) => {
    console.log(message); 
    return "Stage 3";
}).then((message) => {
    console.log(message); 
});

// 5. Create a promise that rejects after 1 second with a specific error message.

const promise5 = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error("Rejected after 1 second"));
    }, 1000);
});

promise5.catch((error) => {
    console.error(error.message); 
});

// 6. Create a function that prints messages "One", "Two", and "Three" with delays of 1, 2, and 3 seconds respectively.

function printMessages() {
    setTimeout(() => {
        console.log("One");
        setTimeout(() => {
            console.log("Two");
            setTimeout(() => {
                console.log("Three");
            }, 3000);
        }, 2000);
    }, 1000);
}

printMessages(); 

// 7. Chain multiple promises that resolve with delays, printing messages sequentially.

const promise7a = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Message 1");
    }, 1000);
});

const promise7b = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Message 2");
    }, 2000);
});

const promise7c = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Message 3");
    }, 3000);
});

promise7a.then((message) => {
    console.log(message); 
    return promise7b;
}).then((message) => {
    console.log(message);
    return promise7c;
}).then((message) => {
    console.log(message); 
});

// 8. Create a promise that resolves successfully or rejects with a specific error, and handle the error using .catch.

const promise8 = new Promise((resolve, reject) => {
    const success = true; 
    if (success) {
        resolve("Resolved successfully");
    } else {
        reject(new Error("Rejected with a specific error"));
    }
});

promise8.then((message) => {
    console.log(message); 
}).catch((error) => {
    console.error(error.message);
});

// 9. Create a promise that resolves to a message and use .then to handle the resolved value.

const promise9 = new Promise((resolve) => {
    resolve("This is a resolved message");
});

promise9.then((message) => {
    console.log(message); 
});

// 10. Chain multiple .then handlers to process intermediate results sequentially.

const promise10 = new Promise((resolve) => {
    resolve(1);
});

promise10.then((value) => {
    console.log(value); 
    return value + 1;
}).then((value) => {
    console.log(value); 
    return value * 2;
}).then((value) => {
    console.log(value); 
    return value - 1;
}).then((value) => {
    console.log(value); 
});
