
const words = ["Apple", "Banana", "Cat", "Elephant", "Computer"];

// 1. Generate a random index within the array length
const randomIndex = Math.floor(Math.random() * words.length);

// 2. Use array destructuring to extract the string
const [selectedString = "No string available"] = [words[randomIndex]];

// 3. Display the extracted string in the console
console.log("Random index:", randomIndex);
console.log("Selected string:", selectedString);
