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

let result = findSecondLargestAndSmallest(numbers);
console.log("2nd Smallest:", result.secondSmallest);
console.log("2nd Largest:", result.secondLargest);
