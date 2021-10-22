### Temperature Conversion Project

A function to convert a temperature into alternative units of measurement.

## Enter a number to discover the equivalent temperature in:
Celsius, Fahrenheit, Kelvin and Newton

Enter temperature in degrees Celsius <input type="number" id="celsius" name="celsius"/> 
<input type="button" onclick="celsiusConverter()" value="Click to convert" />
<div id="theResult"><BR/></div>

<BR/>

Enter temperature in degrees Fahrenheit <input type="number" id="fahrenheit" name="fahrenheit"/> 
<input type="button" onclick="fahrenheitConverter()" value="Click to convert" />
<div id="theAnswer"><BR/></div>

<div id="image"></div>

*Learning Point. It is important to specify the type of variable to avoid errors such as functions reading numbers but concatenating them instead of adding them up.*

<script>
function celsiusConverter() {
    let result = "";
    let celsius = Number(document.getElementById("celsius").value);
    console.log(celsius);
    let kelvin = celsius + 273.15;
    let fahrenheit = celsius*(9/5)+32;
    let newton = celsius*(33/100);
    result = `Degrees ${celsius} C, ${Math.round(fahrenheit)} F, ${Math.round(kelvin)} K, ${Math.round(newton)} N`;
    document.getElementById("theResult").innerHTML = result;
    if (celsius >=25) {
    document.getElementById("image").innerHTML = '<img src="hotWeather.jpg" alt="beach weather">';
    }else if (celsius >= 18) {
    document.getElementById("image").innerHTML = '<img src="pleasant.jpg" alt="t-shirts and jeans weather">';
    }else if (celsius >= 10) {
    document.getElementById("image").innerHTML = '<img src="chilly.jpg" alt="coat, hat and scarf weather">';
    }else if (celsius >= 5) {
    document.getElementById("image").innerHTML = '<img src="verycold.jpg" alt="cold weather gear">';
    }else {
    document.getElementById("image").innerHTML = '<img src="snow.jpg" alt="ski gear">';
    };
};

function fahrenheitConverter() {
    let answer = "";
    let f = document.getElementById("fahrenheit").value;
    console.log(f);
    let c = (f-32)*5/9;
    let k = c+273.15;
    let n = c*(33/100);
    answer = `Degrees ${Math.round(c)} C, ${f} F, ${Math.round(k)} K, ${Math.round(n)} N`; 
    document.getElementById("theAnswer").innerHTML = answer;
};
  </script>
