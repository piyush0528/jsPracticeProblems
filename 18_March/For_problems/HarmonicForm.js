const args = process.argv.slice(2);
const n = parseInt(args[0], 10);

if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    let harmonic = 0;
    console.log(`Harmonic Series for n = ${n}:`);
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
        console.log(`1/${i}`);
    }
    console.log(`\nHarmonic Number H(${n}) = ${harmonic.toFixed(4)}`);
}
