### Temperature Conversion Project

A function to convert a temperature into alternative measurement units.

**I am working on this page just now, check back later to see if it is finished**

## Enter a temperature to discover the equivalent temperature in:
celcius, farenheit, kelvins and newtons.

Enter temperature in degrees Celcius <input type="number" id="celcius" name="celcius"/> 
<input type="button" onclick="celciusConverter()" value="Click to convert" />
<div id="theResult"><BR/></div>

<BR/>

Enter temperature in degrees Farenheit <input type="number" id="farenheit" name="farenheit"/> 
<input type="button" onclick="fahrenheitConverter()" value="Click to convert" />
<div id="theAnswer"><BR/></div>

Image 'State of dress'

-20C inside igloo
0C ski gear
10C coat
18C dress or t-shirt & jeans - pic of kids
25C swims
30C pic of fan
55C flames

Can I link to MET weather RSS feed to include wind chill

Can I display a laundry safe image by determining when it will rain from an RSS weather feed

<script>
function celciusConverter() {
    let result = "";
    let celcius = document.getElementById("celsius").value;
    let fahrenheit = Math.floor(celsius*(9/5)+32);
    let kelvin = Math.floor(celcius + 273.15);
    let newton = Math.floor(celsius*(33/100));
    result = `${celcius} C, ${fahrenheit} F, ${kelvin} K, ${newton} N`
    document.getElementById("theResult").innerHTML = result;
};

function fahrenheitConverter() {
    let answer = "";
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celcius = Math.floor((fahrenheit-32)*5/9);
    let kelvin = Math.floor(celcius + 273.15);
    let newton = Math.floor(celsius*(33/100));
    answer = `${celcius} C, ${fahrenheit} F, ${kelvin} K, ${newton} N` 
    document.getElementById("theAnswer").innerHTML = answer;
}
  </script>
