//Compound Interest Project

function calculateInterest(amount, rate, term, repayment=0) {
    let account = [amount];
    let multiplier = rate/100;
    if (amount <0) {
        console.log(`Amount borrowed £ ${Math.abs(amount)}`);
        console.log(`Annual Repayment amount £ ${repayment}`)
    }else {
        console.log(`Amount saved £ ${amount}`);
        console.log(`Annual Savings Top Up Amount £ ${repayment}`)
        }
    console.log(`The fixed annual interest rate is ${rate} percent.`);
        for (let count = 0; count<term; count++) {
            year = count+1;
            newInterest = Math.floor(account[0] * multiplier);
            newMoney = Math.floor(account[0] + newInterest + repayment);
            account.unshift(newMoney);
            console.log(`Year ${year} £ ${newInterest} interest = total £ ${newMoney} `)
    };
}

calculateInterest(100, 28.5, 3);
console.log('');//blank line
calculateInterest(-100, 28.5, 3, 50);

//Can I save towards a goal
//How long will it take to repay my mortgage
