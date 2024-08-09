// 1. Simple Fetch Request: Make a GET request to a public API (e.g., JSONPlaceholder) and log the response.

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// 2. Fetch with Then: Fetch data from an API and log the JSON response using .then().

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// 3. Handle Errors with Catch: Fetch data from an invalid URL and handle the error using .catch().

fetch('https://invalid.url')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));

// 4. Finally Block: Make a fetch request and use .finally() to log a message that the request has completed.

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    .finally(() => console.log('Fetch request completed'));

// 5. Fetch and Display: Fetch data from an API and display it on a webpage.

fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('data-container');
                data.forEach(post => {
                    const div = document.createElement('div');
                    div.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
                    container.appendChild(div);
                });
            })
            .catch(error => console.error('Error:', error));
// 6. Chaining Multiple Then: Fetch data and chain multiple .then() methods to process the data in stages.

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => data.slice(0, 5)) 
    .then(fivePosts => fivePosts.map(post => post.title)) 
    .then(titles => console.log(titles));

// 7. Fetching Image: Fetch an image from a URL and display it on the webpage.

fetch('https://jsonplaceholder.typicode.com/photos/1')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('image-container');
                const img = document.createElement('img');
                img.src = data.url;
                img.alt = data.title;
                container.appendChild(img);
            })
            .catch(error => console.error('Error:', error));
// 8. Delayed Fetch Request: Use setTimeout to delay a fetch request by a few seconds.

setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}, 3000);
// 9. Fetch and Delay JSON Parsing: Fetch data and use setTimeout to delay parsing the JSON response.

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => setTimeout(() => response.json().then(data => console.log(data)), 2000)) 
    .catch(error => console.error('Error:', error));

// 10. Chained Delayed Fetch: Chain multiple fetch requests with setTimeout delays between them.

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('First fetch complete:', data);
        return new Promise((resolve) => setTimeout(() => resolve(), 2000));
    })
    .then(() => fetch('https://jsonplaceholder.typicode.com/comments'))
    .then(response => response.json())
    .then(data => console.log('Second fetch complete:', data))
    .catch(error => console.error('Error:', error));

// 11. Delayed Error Handling: Fetch data and use setTimeout to delay error handling in .catch().

fetch('https://invalidurl.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => setTimeout(() => console.error('Error:', error), 2000)); 

// 12. Completion Log with Delay: Use setTimeout in .finally() to delay logging the completion message.

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    .finally(() => setTimeout(() => console.log('Fetch request completed.'), 2000)); 

// 13. Fetch and Alert: Fetch data from an API and show an alert with the fetched data after a delay using setTimeout.

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            alert(JSON.stringify(data, null, 2));
        }, 2000);
    })
    .catch(error => console.error('Error:', error));

// 14. Fetch and Conditional Display: Fetch data from an API and display it on the webpage only if certain conditions are met, using setTimeout to delay the display.

fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    const container = document.getElementById('data-container');
                    data.filter(post => post.userId === 1) 
                        .forEach(item => {
                            const div = document.createElement('div');
                            div.innerHTML = `<h2>${item.title}</h2><p>${item.body}</p>`;
                            container.appendChild(div);
                        });
                }, 2000); 
            })
            .catch(error => console.error('Error:', error));
// 15. Fetch and Form Submission: Use fetch to submit form data asynchronously with a delay using setTimeout before handling the response.

document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {
        title: formData.get('title'),
        body: formData.get('body')
    };

    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            const container = document.getElementById('response-container');
            container.innerHTML = `<h2>${result.title}</h2><p>${result.body}</p>`;
        })
        .catch(error => console.error('Error:', error));
    }, 2000); 