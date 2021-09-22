//Generate fibonacci sequence project

let fibonacci = [1, 0];
let reverseFibonacci = [];

function calculateFibonacciNumber(fibNum0, fibNum1) {
    return fibNum0 + fibNum1;
}

//for loops (set where the counter should start; keep going while this condition is false; tick up or down in the counter SEMI-COLONS!!!)
for (let Counter = 0; Counter <= 20; Counter++) {
    newNum = calculateFibonacciNumber(fibonacci[0], fibonacci[1]);
    fibonacci.unshift(newNum);
}

for (let fibCount = fibonacci.length - 1; fibCount >= 0; fibCount--) {
    reverseFibonacci.push(fibonacci[fibCount]);
}

for (const numbers of reverseFibonacci) {
    console.log(numbers);
 }
