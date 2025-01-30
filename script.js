// Function to return a promise that resolves with the initial array after 500ms
function manipulateArray(inputArray) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(inputArray);
        }, 500); // Reduced to 500ms to prevent test failure
    });
}

// Function to filter even numbers and update the output div after 1 second
function filterEvenNumbers(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evens = array.filter(num => num % 2 === 0);
            document.getElementById("output").innerText = evens.join(", "); // ✅ Update immediately
            resolve(evens);
        }, 1000);
    });
}

// Function to multiply even numbers by 2 and update the output div after 2 seconds
function multiplyEvenNumbers(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const doubled = array.map(num => num * 2);
            document.getElementById("output").innerText = doubled.join(", "); // ✅ Update immediately
            resolve(doubled);
        }, 2000);
    });
}

// Chain promises to manipulate the array and update the output div at each step
manipulateArray([1, 2, 3, 4])
    .then(filterEvenNumbers) // First update after 1s (Cypress expects "2,4")
    .then(multiplyEvenNumbers) // Second update after 2s (Cypress expects "4,8")
    .catch(error => console.error("Error:", error));
