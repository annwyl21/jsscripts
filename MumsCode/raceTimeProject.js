let raceNumber = Math.floor(Math.random() * 1000);

let earlyReg = true;
let age = 18;

//ternary operator/ control flow statement to add the 1000 to early registration
let participant = (earlyReg) ? raceNumber += 1000 : raceNumber

//race times Early + Adult
if (earlyReg && age > 18) {
console.log(`Thank you for registering your race starts at 9.30am and your participant race number is ${participant}. Good Luck!`)};

//race times Late + Adult
if (!(earlyReg) && age > 18) {
    console.log(`Thank you for registering your race starts at 11.00am and your participant race number is ${participant}. Good Luck!`)
  };

//youth entrants
if (age < 18) {
  console.log(`Thank you for registering to race in our youth event. Your race starts at 12.30am and your youth participant race number is ${participant}.`)
};

if (age === 18) {
  console.log("Please check with registration desk.")
}