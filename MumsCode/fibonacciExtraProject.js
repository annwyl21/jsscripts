//Generate fibonacci sequence project - using last 2 numbers in array and generating sequence from 0

let fibonacci = [0];

for (let Counter = 0; Counter <= 20; Counter++) {
   
    if (fibonacci.length === 1) {
        fibonacci.push(fibonacci[0] + 1);
    } else {
        fibonacci.push(fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length -2]);
    }
}

for (const numbers of fibonacci) {
    console.log(numbers);
 }
