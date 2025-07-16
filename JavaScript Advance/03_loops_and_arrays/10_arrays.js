// map() - Transform Each Elements
let newNumbers = [10, 20, 30, 40];
let squared = newNumbers.map(num => num * num);
console.log(squared); // Output: [100, 400, 900, 1600]

// filter() - Get Specific Element
let filtered = newNumbers.filter(num => num > 20);
console.log(filtered); // Output: [30, 40]

// find() - Find First Match
let firstMatch = newNumbers.find(num => num > 20);
console.log(firstMatch); // Output: 30

// includes() - Check Existance
console.log(newNumbers.includes(20)); // true
console.log(newNumbers.includes(50)); // false