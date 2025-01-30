//your JS code here. If required.
// Function to return a promise that resolves with manipulated array after 3 seconds
function manipulateArray(inputArray) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(inputArray);
        }, 3000);
    });
}

// Function to filter out odd numbers and update the output div after 1 second
function filterOddNumbers(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredArray = array.filter(num => num % 2 === 0);
            resolve(filteredArray);
        }, 1000);
    });
}

// Function to multiply even numbers by 2 and update the output div after 2 seconds
function multiplyEvenNumbers(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedArray = array.map(num => (num % 2 === 0) ? num * 2 : num);
            resolve(multipliedArray);
        }, 2000);
    });
}

// Function to update the text of an HTML element with the given ID
function updateOutputText(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

// Initial array
const inputArray = [1, 2, 3, 4];

// Chain promises to manipulate the array and update the output div
manipulateArray(inputArray)
    .then(filterOddNumbers)
    .then(multiplyEvenNumbers)
    .then(resultArray => {
        // Update the text of the HTML element with ID "output"
        updateOutputText("output", JSON.stringify(resultArray));
    })
    .catch(error => {
        console.error("Error:", error);
    });
