//Compound Interest Project

function calculateInterest(amount, rate, term) {
    console.log(`You save ${amount}, the fixed annual interest rate is ${rate} percent.`)
    let account = [amount];
    let multiplier = rate/100
    earned = Math.floor(amount*multiplier);
    total = Math.floor(amount + earned);
    account.unshift(total);
    console.log(`Year 1 £ ${earned} interest = total £ ${total} `)
        for (let count = 1; count<term; count++) {
        year = count+1;
        newInterest = Math.floor(account[0] * multiplier);
        newMoney = Math.floor(account[0] + newInterest);
        account.unshift(newMoney);
        console.log(`Year ${year} £ ${newInterest} interest = total £ ${newMoney} `)
    }
}

calculateInterest(-100, 28.5, 3);
