//write a function
function min (x, y) {
    return Math.min(x,y);
}

//console.log(min(5,8));

//recursion
function isEven (num) {
    number = Math.abs(num);
    if (number >1){
        number = number-2;
        isEven(number);
    };
    if (number === 0){
        return `${num} is even.`;
    }else if (number === 1){
        return `${num} is odd.`;
    };
}

//console.log(isEven(50));
//console.log(isEven(75));
//console.log(isEven(-1));
//console.log(isEven(-2));
//console.log(isEven(1));
//console.log(isEven(0));
//console.log(isEven(2));

//simple recursion
function countdown(start){
    if (start>0){
        console.log(start);
        start = start-1
        countdown(start);
    }
}
countdown(10);