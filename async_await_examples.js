
// Write a function that fetches todos from https://jsonplaceholder.typicode.com/todos. The function should count how many todos are completed and log the count to the console.
async function userData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();  
    console.log(data);
    console.log(data.length)  
}

userData();

// Write a function that fetches a specific post from https://jsonplaceholder.typicode.com/posts/5. The function should log the body of the post to the console.

async function userData1() {
    const response1 = await fetch("https://jsonplaceholder.typicode.com/posts/5");
    const data1 = await response1.json();  
    console.log(data1.body);
    
}
userData1();



// Write an async function that performs two parallel API calls using Promise.all. Log the results of both calls to the console.

async function parallel(){
    try{
     const urls =['https://jsonplaceholder.typicode.com/posts/1',
                  'https://jsonplaceholder.typicode.com/posts/2'
                 ]
        const fetchPromise =urls.map(url=>fetch(url).then(response=>response.json()));
        const results = await Promise.all(fetchPromise);
        console.log(results);
    }
    catch(error){
        console.log(error)
    }
}
parallel();

// Write an async function that fetches data from an API, processes the data (e.g., extracts a specific field), and returns the processed result. Log the result to the console.

async function fetchAndProcessData() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const titles = data.map(post => post.title);
        console.log('Post titles:', titles);
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}

fetchAndProcessData();

// Write an async function that simulates a delay using setTimeout and returns a message after the delay. Use await to wait for the timeout before logging the message.

async function delay(){
    console.log("before settimeout");
    setTimeout(()=>{
        console.log("message in set timeout");
    },10000)
    console.log("After settimeout");
}
delay();

// Write an async function that performs a series of asynchronous operations (e.g., fetching data, then processing it). Ensure that each operation completes before the next one starts.


async function performSequentialOperations() {
    try {
        // Fetch data from the API
        const fetchUrl = 'https://jsonplaceholder.typicode.com/posts/1';
        const fetchResponse = await fetch(fetchUrl);
        if (!fetchResponse.ok) {
            throw new Error(`HTTP error! status: ${fetchResponse.status}`);
        }
        const data = await fetchResponse.json();

        // Process the fetched data
        const processedData = {
            title: data.title.toUpperCase(),
            body: data.body.substring(0, 50) // Shorten body for demonstration
        };

        // Log the processed result
        console.log('Processed data:', processedData);
    } catch (error) {
        console.error('Error during operations:', error);
    }
}

performSequentialOperations();

