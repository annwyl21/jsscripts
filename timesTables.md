# Learning our Times Tables

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
<input type="button" onclick="generateDouble()" value="Give me the Double"/>
<div id="theDouble"><BR/></div>
<BR/>
<input type="button" onclick="generateTable()" value = "Give me the Answer">
<div id="theTable"><BR/></div>

<script>
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
        table += `${count} x ${num1} = ${answer}\n`;
    }
    document.getElementById("theTable").innerHTML = table;
}
</script>
