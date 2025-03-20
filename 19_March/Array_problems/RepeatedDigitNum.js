function findRepeatedDigits() {
    let repeatedNumbers = [];

    for (let i = 10; i <= 100; i++) {
        let numStr = i.toString();
        if (numStr[0] === numStr[1]) {
            repeatedNumbers.push(i);
        }
    }

    return repeatedNumbers;
}

let result = findRepeatedDigits();
console.log("Numbers with repeated digits:", result);
