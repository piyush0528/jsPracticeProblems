function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function simulateDiceRolls() {
    let rollCount = new Map();
    for (let i = 1; i <= 6; i++) rollCount.set(i, 0);

    let maxRoll = 10;
    let reachedMax = false;

    while (!reachedMax) {
        let roll = rollDie();
        rollCount.set(roll, rollCount.get(roll) + 1);

        if (rollCount.get(roll) === maxRoll) {
            reachedMax = true;
        }
    }

    let maxNum = [...rollCount.entries()].reduce((a, b) => (a[1] > b[1] ? a : b));
    let minNum = [...rollCount.entries()].reduce((a, b) => (a[1] < b[1] ? a : b));

    console.log("Final Roll Count:", Object.fromEntries(rollCount));
    console.log(`Most frequent number: ${maxNum[0]} (rolled ${maxNum[1]} times)`);
    console.log(`Least frequent number: ${minNum[0]} (rolled ${minNum[1]} times)`);
}

simulateDiceRolls();
