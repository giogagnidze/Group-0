// 1. Create a simple Promise that resolves after 2 seconds with the message "Task 1 complete".

const task1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 1 complete");
    }, 2000);
});

task1.then(message => console.log(message));

// 2. Create a Promise that rejects immediately with an error message "Task 2 failed". Handle the rejection using .catch.

const task2 = new Promise((_, reject) => {
    reject("Task 2 failed");
});

task2.catch(error => console.log(error));

// 3. Create a Promise that resolves with a number (e.g., 5). Chain a .then handler to double the number and return it, then chain another .then handler to log the doubled number.

const task3 = new Promise((resolve) => {
    resolve(5);
});

task3
    .then(number => number * 2)
    .then(doubled => console.log(doubled));

// 4. Create a function that returns a Promise which resolves after 2 seconds with a message "First". Chain another then that waits 1 second before logging "Second".

const task4 = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve("First");
    }, 2000);
});

task4()
    .then(message => {
        console.log(message);
        return new Promise(resolve => setTimeout(() => resolve("Second"), 1000));
    })
    .then(message => console.log(message));

// 5. Create a function that returns a Promise which rejects after 2 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.

const task5 = () => new Promise((_, reject) => {
    setTimeout(() => {
        reject("Task 3 failed");
    }, 2000);
});

task5().catch(error => console.log(error));

// 6. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete".

const task6 = () => new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
        resolve("Task 1 complete");
    }, delay);
});

task6().then(message => console.log(message));

// 7. Create a function that returns a Promise which resolves after a random delay between 1 and 3 seconds with the message "First". Chain another .then that waits for another random delay between 1 and 3 seconds before logging "Second".

const task7 = () => new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(() => {
        resolve("First");
    }, delay);
});

task7()
    .then(message => {
        console.log(message);
        const delay = Math.floor(Math.random() * 3000) + 1000;
        return new Promise(resolve => setTimeout(() => resolve("Second"), delay));
    })
    .then(message => console.log(message));

// 8. Create a function that returns a Promise which rejects after a random delay between 1 and 4 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.

const task8 = () => new Promise((_, reject) => {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    setTimeout(() => {
        reject("Task 3 failed");
    }, delay);
});

task8().catch(error => console.log(error));

// 9. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete" if the random number is greater than 0.5, otherwise, it should resolve with the message "Task 1 was quick".

const task9 = () => new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    const message = Math.random() > 0.5 ? "Task 1 complete" : "Task 1 was quick";
    setTimeout(() => {
        resolve(message);
    }, delay);
});

task9().then(message => console.log(message));

// 10. Create a function that returns a Promise which resolves after a random delay between 1 and 4 seconds. If the random number is less than 0.3, reject with an error message "Task 3 failed". Otherwise, resolve with the message "Task 3 complete". Handle the rejection with a .catch to log the error message.

const task10 = () => new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    const randomNum = Math.random();
    setTimeout(() => {
        if (randomNum < 0.3) {
            reject("Task 3 failed");
        } else {
            resolve("Task 3 complete");
        }
    }, delay);
});

task10()
    .then(message => console.log(message))
    .catch(error => console.log(error));

// 11. Create three Promises that resolve with different messages ("Promise 1", "Promise 2", "Promise 3") after 1, 2, and 3 seconds respectively. Use Promise.all to log all messages once all Promises are resolved.

const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 3000));

Promise.all([promise1, promise2, promise3])
    .then(messages => console.log(messages));

// 12. Create three Promises that resolve with different messages after random delays between 1 and 5 seconds. Use Promise.all to log all messages once all Promises are resolved.

const randomDelay = () => Math.floor(Math.random() * 5000) + 1000;

const promise4 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), randomDelay()));
const promise5 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), randomDelay()));
const promise6 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), randomDelay()));

Promise.all([promise4, promise5, promise6])
    .then(messages => console.log(messages));

// 13. Create three Promises where one of them rejects after 2 seconds with an error message "Promise failed". Use Promise.all to handle the rejection and log the error message.

const promise7 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000));
const promise8 = new Promise((_, reject) => setTimeout(() => reject("Promise failed"), 2000));
const promise9 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 3000));

Promise.all([promise7, promise8, promise9])
    .then(messages => console.log(messages))
    .catch(error => console.log(error));

// 14. Create three Promises that resolve or reject based on random conditions. Use Promise.all to log all resolved messages or handle the rejection.

const promise10 = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    setTimeout(() => randomNum > 0.5 ? resolve("Promise 1") : reject("Promise 1 failed"), 1000);
});
const promise11 = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    setTimeout(() => randomNum > 0.5 ? resolve("Promise 2") : reject("Promise 2 failed"), 2000);
});
const promise12 = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    setTimeout(() => randomNum > 0.5 ? resolve("Promise 3") : reject("Promise 3 failed"), 3000);
});

Promise.all([promise10, promise11, promise12])
    .then(messages => console.log(messages))
    .catch(error => console.log(error));

// 15. Create three Promises that resolve with numbers after random delays. Use Promise.all to get the results, then chain another .then to calculate and log the sum of the numbers.

const promise13 = new Promise((resolve) => setTimeout(() => resolve(1), Math.floor(Math.random() * 5000) + 1000));
const promise14 = new Promise((resolve) => setTimeout(() => resolve(2), Math.floor(Math.random() * 5000) + 1000));
const promise15 = new Promise((resolve) => setTimeout(() => resolve(3), Math.floor(Math.random() * 5000) + 1000));

Promise.all([promise13, promise14, promise15])
    .then(numbers => {
        const sum = numbers.reduce((total, num) => total + num, 0);
        console.log(sum);
    });

// 16. Create three Promises that resolve with different messages ("Promise 1", "Promise 2", "Promise 3") after 1, 2, and 3 seconds respectively. Use Promise.race to log the message from the first Promise that resolves.

const promise16 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000));
const promise17 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));
const promise18 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 3000));

Promise.race([promise16, promise17, promise18])
    .then(message => console.log(message));

// 17. Create three Promises that resolve with different messages after random delays between 1 and 5 seconds. Use Promise.race to log the message from the first Promise that resolves.

const randomDelay2 = () => Math.floor(Math.random() * 5000) + 1000;

const promise19 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), randomDelay2()));
const promise20 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), randomDelay2()));
const promise21 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), randomDelay2()));

Promise.race([promise19, promise20, promise21])
    .then(message => console.log(message));

// 18. Create three Promises where one of them resolves immediately with the message "Instant Promise". Use Promise.race to log the message from the first Promise that resolves.

const promise22 = new Promise((resolve) => resolve("Instant Promise"));
const promise23 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));
const promise24 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 3000));

Promise.race([promise22, promise23, promise24])
    .then(message => console.log(message));

// 19. Create three Promises where one of them rejects after 2 seconds with an error message "Promise failed". Use Promise.race to handle the resolution or rejection and log the result or error.

const promise25 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000));
const promise26 = new Promise((_, reject) => setTimeout(() => reject("Promise failed"), 2000));
const promise27 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 3000));

Promise.race([promise25, promise26, promise27])
    .then(message => console.log(message))
    .catch(error => console.log(error));

// 20. Create three Promises that resolve based on random conditions (e.g., if a random number is greater than 0.5, resolve with a message; otherwise, resolve after 2 seconds with a different message). Use Promise.race to log the message from the first Promise that resolves.

const promise28 = new Promise((resolve) => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
        resolve("Quick Promise 1");
    } else {
        setTimeout(() => resolve("Delayed Promise 1"), 2000);
    }
});
const promise29 = new Promise((resolve) => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
        resolve("Quick Promise 2");
    } else {
        setTimeout(() => resolve("Delayed Promise 2"), 2000);
    }
});
const promise30 = new Promise((resolve) => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
        resolve("Quick Promise 3");
    } else {
        setTimeout(() => resolve("Delayed Promise 3"), 2000);
    }
});

Promise.race([promise28, promise29, promise30])
    .then(message => console.log(message));

// 21. Fetch data from a URL and log the response to the console.

fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// 22. Fetch data from an API and display it on a web page.

fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('data-container');
                container.innerHTML = JSON.stringify(data, null, 2);
            })
.catch(error => console.error('Error:', error));
// 23. Fetch JSON data from an API and display specific information (e.g., title, description) on a webpage.

fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('data-container');
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
                    container.appendChild(div);
                });
            })
            .catch(error => console.error('Error:', error));
// 24. Fetch data from an API and create a dropdown/select element with the fetched data.

fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
                const dropdown = document.getElementById('data-dropdown');
                data.forEach(item => {
                    const option = document.createElement('option');
                    option.value = item.id;
                    option.text = item.name;
                    dropdown.appendChild(option);
                });
            })
            .catch(error => console.error('Error:', error));
// 25. Fetch image URLs from an API and display them on a webpage.

fetch('https://api.example.com/images')
.then(response => response.json())
.then(data => {
    const container = document.getElementById('image-container');
    data.forEach(item => {
        const img = document.createElement('img');
        img.src = item.url;
        img.alt = item.description;
        container.appendChild(img);
    });
})
.catch(error => console.error('Error:', error));