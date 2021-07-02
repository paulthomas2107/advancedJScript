// Old concatenation
let word1 = "Paul";
let word2 = "Thomas";
const fullName = word1 + " " + word2;
console.log(fullName);

// Template Literals
const fullName2 = `${word1} ${word2}`;
console.log(fullName2);

let num1 = 217;
let num2 = 66;
const fullName3 = `${num1} ${num2}`;
console.log(fullName3);

let exampleText = "Hello \n" + "World";
document.getElementById("example1").innerText = exampleText;

let exampleText2 = `${word1}\n ${word2}`;
document.getElementById("example2").innerText = exampleText2;

// Destructuring objects
const personalInfo = {
  firstName: "Paul",
  lastName: "Thomas",
  city: "Manchester",
  state: "England",
  zipCode: "90210",
};

// Seperate and rename firstname and lastname
const { firstName: fn, lastName: ln } = personalInfo;
let example3 = `${fn} ${ln}`;
document.getElementById("example3").innerText = example3;

// Destructuring array
let [firstName2, middleName2] = ["Paul", "Rory", "Caitlin"];
let example4 = firstName2 + middleName2;
document.getElementById("example3").innerText = example4;
    