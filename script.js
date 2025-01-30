function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]); // Initial array
        }, 1000); // Matches Cypress timing
    });
}

getNumbers()
    .then(numbers => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evens = numbers.filter(num => num % 2 === 0);
                document.getElementById("output").textContent = evens.join(", ");
                resolve(evens);
            }, 1000); // Cypress expects "2,4" at this point
        });
    })
    .then(evens => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubled = evens.map(num => num * 2);
                document.getElementById("output").textContent = doubled.join(", ");
                resolve(doubled);
            }, 2000); // Cypress expects "4,8" here
        });
    })
    .catch(error => console.error("Error:", error));
