function generateBirthdays() {
    let birthMonthMap = new Map();

    for (let i = 1; i <= 12; i++) {
        birthMonthMap.set(i, []);
    }

    for (let person = 1; person <= 50; person++) {
        let birthMonth = Math.floor(Math.random() * 12) + 1;
        birthMonthMap.get(birthMonth).push(`Person${person}`);
    }

    return birthMonthMap;
}

let birthdays = generateBirthdays();
console.log("Individuals grouped by birth month:");

for (let [month, people] of birthdays) {
    console.log(`Month ${month}: ${people.length > 0 ? people.join(", ") : "None"}`);
}
