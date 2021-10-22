# Learning times tables

A function to support learning times tables.

Enter a number to choose which times table to work on
<input type="number" id="choice" name="choice"/> 
<BR/>
<input type="button" onclick="generateQuestion()" value="Click for a Question"/>
<div id="theQuestion"><BR/></div>
<BR/>
<input type="button" onclick="generateSquare()" value="Give me the Square"/>
<div id="theSquare"><BR/></div>
<BR/>
<input type="button" onclick="generateDoubles()" value="Give me the Double"/>
<div id="theDoubles"><BR/></div>
<BR/>
<input type="button" onclick="generateTable()" value = "Give me the Answer">
<div id="theTable"><BR/></div>

<script>
    user input = Number(document.getElementById("celsius").value);
    return = document.getElementById("theResult").innerHTML = result;

function generateQuestion() {
    let question = "";
    num1 = Number(document.getElementById("choice").value);
    num2 = Math.floor(Math.random() * 12);
    question = `${num1} x ${num2} = `;
    document.getElementById("theQuestion").innerHTML = question;
}

function generateSquare() {
    let squared = "";
    num1 = Number(document.getElementById("choice").value);
    let square = num1*num1;
    squared = `Here is the square number to help you to count up or down...\n ${num1} x 
${num1} = ${square}`;
    document.getElementById("theSquare").innerHTML = squared;    
}

function generateDoubles() {
    console.log('These sums might help...');
    let lowTimesResult = 2* num2;
    console.log(`2 sets of ${num2} are ${lowTimesResult} (2 x ${num2} = ${lowTimesResult})`);
    console.log('and');
}

function doubling(num2) {
    let two = num2+num2;
    let doubledResult = two * num2;
    console.log(`${two} sets of ${num2} are ${doubledResult} (${two} x ${num2} = ${doubledResult})`);
    console.log('');//spare line to space it out
}

    //generating the full times table prompt
    for (let count = 0; count < 21; count++) {
        console.log(count + ' x ' + num2 + ' = ' + (count * num2))
    }

    </script>
