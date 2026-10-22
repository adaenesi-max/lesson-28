
function checkPalindromes(words) {
    for (let word of words) {
        let reversedWord = word.split("").reverse().join("");

        if (word.toLowerCase() === reversedWord.toLowerCase()) {
            console.log(word + " is a palindrome.");
        } else {
            console.log(word + " is not a palindrome.");
        }
    }
}

const words = ["level", "hello", "radar", "world", "madam"];

checkPalindromes(words);