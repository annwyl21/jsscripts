# Learning our Times Tables

A function to support learning times tables.

Enter a number to choose which times table to work on
<input type="number" id="choice" name="choice"/> 
<input type="button" onclick="generateQuestion()" value="QUESTION"/>
<div id="theQuestion"><BR/></div>
<BR/>
<input type="number" id="response" name="response"/>
<input type="button" onclick="checkAnswer()" value="ANSWER"/>
<div id="theResponse"><BR/></div>
<BR/>
<input type="button" onclick="generateSquare()" value="HINT Give me the Square"/>
<div id="theSquare"><BR/></div>
<BR/>
<input type="button" onclick="generateDouble()" value="HINT Give me the Double"/>
<div id="theDouble"><BR/></div>
<BR/>
<input type="button" onclick="generateTable()" value = "HINT Give me the Full Table">
<div id="theTable"><BR/></div>

<script>

let questionAnswer = "";

function generateQuestion() {
    let question = "";
    let answer = "";
    num1 = Number(document.getElementById("choice").value);
    num2 = Math.floor(Math.random() * 12);
    question = `${num1} x ${num2} = `;
    questionAnswer = num1*num2;
    document.getElementById("theQuestion").innerHTML = question;
}

function checkAnswer() {
    let message = "";
    let response = document.getElementById("response").value);
    if (response === questionAnswer) {
        message = `Congratulations, ${questionAnswer} is correct.`;
        document.getElementById("theResponse").innerHTML = message;
    }else{
        message = `Try looking at the full table to see where you went wrong`;
        document.getElementById("theResponse").innerHTML = message;
    }
}

function generateSquare() {
    let squared = "";
    num1 = Number(document.getElementById("choice").value);
    let square = num1*num1;
    squared = `Here is the square number to help you to count up or down...\n ${num1} x 
${num1} = ${square}`;
    document.getElementById("theSquare").innerHTML = squared;    
}

function generateDouble() {
    let double = "";
    num1 = Number(document.getElementById("choice").value);
    let lowTimesResult = 2* num1;
    double = `2 sets of ${num1} are ${lowTimesResult}\n (2 x ${num1} = ${lowTimesResult})`;
    document.getElementById("theDouble").innerHTML = double;
}

function generateTable() {
    let table = "";
    num1 = Number(document.getElementById("choice").value);
    for (let count = 0; count < 21; count++) {
        let answer = count*num1;
        table += `${count} x ${num1} = ${answer} <BR/>`;
    }
    document.getElementById("theTable").innerHTML = table;
}
</script>
