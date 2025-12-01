// greet.js

// Get the 3rd command-line argument (0=node, 1=this file, 2=your input)
const colors = require("colors");
const name = process.argv[2];

// If no name provided
if (!name) {
  console.log("Usage: node greet.js <name>");
  process.exit(1);
}

// Print greeting
console.log(colors.green(`Hello, ${name}!`));
