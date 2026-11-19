// Les variables globales
var celcius = document.getElementById('celcius'),
    fahrenheit = document.getElementById('fahrenheit'),
    kelvin = document.getElementById('kelvin');

// Convertir la température Celcius en Fahrenheit
var convertCelsiusToFahrenheit = function(valueCelcius, decimal, n) {
    valueCelcius = parseInt(valueCelcius.value);
    decimal = (9 / 5);
    n = 32;

    return (valueCelcius * decimal) + n;
};

// Convertir la température Fahrenheit en Celcius
var convertFahrenheitToCelcius = function(valueFahrenheit, decimal, n) {
    valueFahrenheit = parseInt(valueFahrenheit.value);
    decimal = (5 / 9);
    n = 32;

    return (valueFahrenheit - n) * decimal;
};

// Convertir la température Celcius en Kelvin
var convertCelciusToKelvin = function(valueCelcius, decimal) {
    valueCelcius = parseInt(valueCelcius.value);
    decimal = 273.15;

    return (valueCelcius + decimal);
};

// Convertir la température Kelvin en Celcius
var convertKelvinToCelcius = function(valueKelvin, decimal) {
    valueKelvin = parseInt(valueKelvin.value);
    decimal = 273.15;

    return (valueKelvin - decimal);
};

// Convertir la température Fahrenheit en Kelvin
var convertFahrenheitToKelvin = function(valueFahrenheit, decimal, n) {
    valueFahrenheit = parseInt(valueFahrenheit.value);
    decimal = (5 / 9);
    n = 459.67;

    return (valueFahrenheit + n) * decimal;

};

// // Convertir la température Kelvin en Fahrenheit
var convertKelvinToFahrenheit = function(valueKelvin, decimal, n1, n2) {
    valueKelvin = parseInt(valueKelvin.value);
    decimal = (9 / 5);
    n1 = 273.15;
    n2 = 32;

    return (valueKelvin - n1) * decimal + n2;
};

function printResult() {
    var inputs = document.querySelectorAll('input');

    for (var i = 0; i < inputs.length; i++) {
        switch (inputs[i].name) {
            case 'celcius' :
                inputs[i].addEventListener('change', function() {
                        fahrenheit.value = convertCelsiusToFahrenheit(celcius);
                        kelvin.value = convertCelciusToKelvin(celcius);
                }, false);
            break;
            case 'fahrenheit' :
                inputs[i].addEventListener('change', function() {
                    celcius.value = convertFahrenheitToCelcius(fahrenheit);
                    kelvin.value = convertFahrenheitToKelvin(fahrenheit);
                }, false);
            break;
            case 'kelvin':
                inputs[i].addEventListener('change', function() {
                    celcius.value = convertKelvinToCelcius(kelvin);
                    fahrenheit.value = convertKelvinToFahrenheit(kelvin);
                }, false);
            break;
        }
    }
}
printResult()