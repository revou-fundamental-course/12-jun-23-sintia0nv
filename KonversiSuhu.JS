let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");

function CelToFar(){
    let output = (parseFloat(celcius.value) * 9/5)*32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function FarToCel(){
    let output = (parseFloat(fahrenheit.value) *32) * 5/9;
    celcius.value = parseFloat(output.toFixed(2));
    console.log(output);
}