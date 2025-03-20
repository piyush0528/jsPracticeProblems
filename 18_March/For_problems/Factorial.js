const num = parseInt(process.argv[2]);

if (isNaN(num) || num < 0) {
    console.log("Factorial is not defined for negative numbers or invalid input.");
} else {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log(`${num}! = ${result}`);
}
