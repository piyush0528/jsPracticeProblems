const args = process.argv.slice(2);
const a = parseFloat(args[0]);
const b = parseFloat(args[1]);
const c = parseFloat(args[2]);

const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;

let max = result1;
let min = result1;

if (result2 > max) max = result2;
if (result3 > max) max = result3;
if (result4 > max) max = result4;

if (result2 < min) min = result2;
if (result3 < min) min = result3;
if (result4 < min) min = result4;

console.log(`Results:`);
console.log(`1. a + b * c = ${result1}`);
console.log(`2. a % b + c = ${result2}`);
console.log(`3. c + a / b = ${result3}`);
console.log(`4. a * b + c = ${result4}`);
console.log(`Maximum Value: ${max}`);
console.log(`Minimum Value: ${min}`);
