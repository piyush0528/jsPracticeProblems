function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

let headsCount = 0, tailsCount = 0;
const target = 11;

while (headsCount < target && tailsCount < target) {
    let result = flipCoin();

    if (result === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Flip: ${result} | Heads: ${headsCount}, Tails: ${tailsCount}`);
}

console.log(`\nWinner: ${headsCount === target ? "Heads" : "Tails"} reached 11 first!`);
