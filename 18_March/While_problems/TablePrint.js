const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Enter a valid non-negative integer.");
} else {
    let power = 0;
    let value = 1;

    while (power <= n && value <= 256) {
        console.log(`2^${power} = ${value}`);
        value *= 2;
        power++;
    }
}
