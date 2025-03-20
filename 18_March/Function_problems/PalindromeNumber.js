function isPalindrome(number) {
    let original = number.toString();
    let reversed = original.split('').reverse().join('');
    return original === reversed;
}

function checkPalindromes(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log(`${num1} and ${num2} are both Palindromes.`);
    } else if (isPalindrome(num1)) {
        console.log(`${num1} is a Palindrome, but ${num2} is not.`);
    } else if (isPalindrome(num2)) {
        console.log(`${num2} is a Palindrome, but ${num1} is not.`);
    } else {
        console.log(`Neither ${num1} nor ${num2} is a Palindrome.`);
    }
}
checkPalindromes(121, 454);
checkPalindromes(121, 123);
checkPalindromes(789, 987);
