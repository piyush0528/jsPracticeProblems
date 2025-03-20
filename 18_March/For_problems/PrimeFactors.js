const num = parseInt(process.argv[2]);

if (isNaN(num) || num <= 0) {
    console.log("Enter a valid positive number.");
} else {
    let N = num;

    while (N % 2 === 0) {
        console.log(2);
        N /= 2;
    }

    for (let i = 3; i * i <= N; i += 2) {
        while (N % i === 0) {
            console.log(i);
            N /= i;
        }
    }

    if (N > 1) {
        console.log(N);
    }
}
