const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        let palindrome = getPalindrome(num);
        console.log(`${num} is a Prime Number.`);

        if (isPrime(palindrome)) {
            console.log(`Its Palindrome ${palindrome} is also Prime.`);
        } else {
            console.log(`But its Palindrome ${palindrome} is NOT Prime.`);
        }
    } else {
        console.log(`${num} is NOT a Prime Number.`);
    }
}
rl.question("Enter a number: ", function(input) {
    let number = parseInt(input);
    checkPrimeAndPalindrome(number);
    rl.close();
});
