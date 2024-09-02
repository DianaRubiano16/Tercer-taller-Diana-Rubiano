function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('result').innerText = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid temperature in Celsius.';
    }
}

function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('result').innerText = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid temperature in Fahrenheit.';
    }
}
