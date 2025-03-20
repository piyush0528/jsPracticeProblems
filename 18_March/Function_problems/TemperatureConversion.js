const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertTemperature() {
    console.log("Select Conversion:");
    console.log("1. Celsius to Fahrenheit");
    console.log("2. Fahrenheit to Celsius");

    rl.question("Enter your choice (1 or 2): ", function(choice) {
        switch (choice) {
            case "1":
                rl.question("Enter temperature in Celsius (0°C to 100°C): ", function(celsius) {
                    celsius = parseFloat(celsius);
                    if (celsius >= 0 && celsius <= 100) {
                        console.log(`${celsius}°C = ${celsiusToFahrenheit(celsius).toFixed(2)}°F`);
                    } else {
                        console.log("Error: Enter a value between 0°C and 100°C.");
                    }
                    rl.close();
                });
                break;

            case "2":
                rl.question("Enter temperature in Fahrenheit (32°F to 212°F): ", function(fahrenheit) {
                    fahrenheit = parseFloat(fahrenheit);
                    if (fahrenheit >= 32 && fahrenheit <= 212) {
                        console.log(`${fahrenheit}°F = ${fahrenheitToCelsius(fahrenheit).toFixed(2)}°C`);
                    } else {
                        console.log("Error: Enter a value between 32°F and 212°F.");
                    }
                    rl.close();
                });
                break;

            default:
                console.log("Invalid choice! Please enter 1 or 2.");
                rl.close();
        }
    });
}

convertTemperature();
