function getRandomThreeDigit() {
    return Math.floor(Math.random() * 900) + 100; 
}

let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(getRandomThreeDigit());
}

console.log("Generated Numbers:", numbers);

function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

function findUsingSorting(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b); 
    return {
        secondSmallest: sortedArr[1],
        secondLargest: sortedArr[sortedArr.length - 2]
    };
}

let resultWithoutSorting = findSecondLargestAndSmallest(numbers);
console.log("Without Sorting - 2nd Smallest:", resultWithoutSorting.secondSmallest);
console.log("Without Sorting - 2nd Largest:", resultWithoutSorting.secondLargest);

let resultWithSorting = findUsingSorting(numbers);
console.log("With Sorting - 2nd Smallest:", resultWithSorting.secondSmallest);
console.log("With Sorting - 2nd Largest:", resultWithSorting.secondLargest);
