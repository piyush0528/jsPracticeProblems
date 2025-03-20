let money = 100;
const goal = 200;
let bets = 0, wins = 0;

while (money > 0 && money < goal) {
    bets++;

    if (Math.random() < 0.5) { // 50% chance to win
        money++;
        wins++;
    } else {
        money--;
    }

    console.log(`Bet ${bets}: Money = ₹${money}`);
}

console.log(`\nTotal Bets: ${bets}`);
console.log(`Total Wins: ${wins}`);
console.log(money === 200 ? "Reached ₹200! 🎉" : "Went broke! 💸");
