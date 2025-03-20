const args = process.argv.slice(2);
const day = parseInt(args[0], 10);
const month = parseInt(args[1], 10);

let isValid = false;

if ((month === 3 && day >= 20 && day <= 31) ||
    (month === 4 && day >= 1 && day <= 30) ||
    (month === 5 && day >= 1 && day <= 31) ||
    (month === 6 && day >= 1 && day <= 20)) {
    isValid = true;
}

console.log(isValid);
