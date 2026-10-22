
let numbers = [10, 20, 30, 40, 50];

// 1. Add a number to the end of the array
numbers.push(60);

// 2. Remove the first number from the array
numbers.shift();

// 3. Add a new number at the second position
numbers.splice(1, 0, 15);

// 4. Display the modified array in the console
console.log(numbers);



[20, 15, 30, 40, 50, 60]