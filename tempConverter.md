### Temperature Conversion Project

A function to convert a temperature into alternative measurement units.

**I am working on this page just now, check back later to see if it is finished**

## Enter a temperature to discover the equivalent temperature in:
celcius, farenheit, kelvins and newtons.

Enter temperature in degrees Celcius <input type="number" id="celcius" name="celcius"/> 
<input type="button" onclick="alert()" value="Click to convert" />

Enter temperature in degrees Farenheit <input type="number" id="farenheit" name="farenheit"/> 
<input type="button" onclick="alert()" value="Click to convert" />

Result in Celcius, Farenheit, Kelvin & Newton
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
function celciusConverter(number) {
    let result = "";
    let celcius = number;
    let fahrenheit = Math.floor(celsius*(9/5)+32);
    let kelvin = Math.floor(celcius + 273.15);
    let newton = Math.floor(celsius*(33/100));
    result = `${celcius} C, ${fahrenheit} F, ${kelvin} K, ${newton} N`
};

function fahrenheitConverter(digit) {
    let answer = "";
    let fahrenheit = number;
    let celcius = Math.floor((fahrenheit-32)*5/9);
    let kelvin = Math.floor(celcius + 273.15);
    let newton = Math.floor(celsius*(33/100));
    answer = `${celcius} C, ${fahrenheit} F, ${kelvin} K, ${newton} N` 
}
  </script>