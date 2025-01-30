function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 500); // Reduced time to 500ms to fit Cypress timing
    });
}

getNumbers()
    .then(numbers => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evens = numbers.filter(num => num % 2 === 0);
                document.getElementById("output").textContent = evens.join(", ");
                resolve(evens);
            }, 1000); // Ensures `2,4` appears after 1s
        });
    })
    .then(evens => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubled = evens.map(num => num * 2);
                document.getElementById("output").textContent = doubled.join(", ");
                resolve(doubled);
            }, 2000); 
				
        });
    });
