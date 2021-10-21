### Temperature Conversion Project

A function to convert a temperature into alternative measurement units.

**I am working on this page just now, check back later to see if it is finished**

## Enter a temperature to discover the equivalent temperature in:
celsius, farenheit, kelvins and newtons.

Enter temperature in degrees Celsius <input type="number" id="celsius" name="celsius"/> 
<input type="button" onclick="celsiusConverter()" value="Click to convert" />
<div id="theResult"><BR/></div>

<BR/>

Enter temperature in degrees Fahrenheit <input type="number" id="fahrenheit" name="fahrenheit"/> 
<input type="button" onclick="fahrenheitConverter()" value="Click to convert" />
<div id="theAnswer"><BR/></div>

![image of temperature](verycold.jpg)

<script>
function celsiusConverter() {
    let result = "";
    let celsius = document.getElementById("celsius").value;
    console.log(celsius);
    let kelvin = celsius + 273.15;
    let fahrenheit = celsius*(9/5)+32;
    let newton = celsius*(33/100);
    result = `Degrees ${celsius} C, ${fahrenheit} F, ${kelvin} K, ${newton} N`;
    document.getElementById("theResult").innerHTML = result;
};

function fahrenheitConverter() {
    let answer = "";
    let f = document.getElementById("fahrenheit").value;
    console.log(f);
    let c = (f-32)*5/9;
    let k = c+273.15;
    let n = c*(33/100);
    answer = `Degrees ${c} C, ${f} F, ${k} K, ${n} N`; 
    document.getElementById("theAnswer").innerHTML = answer;
};
  </script>
