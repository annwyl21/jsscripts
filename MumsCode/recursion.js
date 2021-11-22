//write a function
function min (x, y) {
    return Math.min(x,y);
}

console.log(min(5,8));

//recursion
function isEven (num) {
    number = Math.abs(num);
    function innerFunction(number){
        result = number;
        while (result>1){
            result = result-2;
        }
        return result;
    }
    innerFunction(number);
    if (result === 0){
        return `${num} is even.`
    }else if (result === 1){
        return `${num} is odd.`
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));
console.log(isEven(1));
console.log(isEven(0));