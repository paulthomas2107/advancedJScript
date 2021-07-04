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
let [firstName2, middleName2, lastName3] = ["Paul", "Rory", "Caitlin"];
// Override element
lastName3 = "Smith";
let example4 = firstName2 + middleName2 + lastName3;
document.getElementById("example3").innerText = example4;

function addressMaker(city, state) {
  const newAddress = { newCity: city, state };
  return newAddress;
}

let newAddress = addressMaker("Manchester", "England");
document.getElementById("example5").innerText =
  newAddress.newCity + " " + newAddress.state;

// Object Literal (Challaenge)
function addressMaker2(address) {
  const { city, state } = address;
  const newAddress = {
    city,
    state,
    country: "England",
  };
  return newAddress;
}

let address2 = addressMaker2({ city: "Manchester", state: "Lancs" });
document.getElementById(
  "example6"
).innerText = `${address2.city} ${address2.state} ${address2.country}`;

// For of loop
let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
  total += income;
}
document.getElementById("example7").innerText = total;

let fullName4 = "Paul Alan Thomas";
let text4 = "";
for (const char of fullName4) {
  text4 += " " + char;
}
document.getElementById("example8").innerText = text4;

// Challenge for of
let inc1 = [62000, 67000, 75000];
for (var income of inc1) {
  income += 5000;
}
document.getElementById("example9").innerText = inc1;

// Spread
let ex9 = [1, 2, 3, 4, 5, 6];
let ex10 = [...ex9];
ex10.push(true);
document.getElementById("example10").innerText = ex9;
document.getElementById("example11").innerText = ex10;

let ex12 = {
  firstName: "Paul",
};

let ex13 = {
  firstName: "Hello", // Default if not present or N/A
  ...ex12,
};

document.getElementById("example12").innerText = ex13.firstName;

// Rest operator
function addNum(...nums) {
  return nums;
}
let numList = addNum(4, 5, 6, 7, 122);
document.getElementById("example13").innerText = numList;

// Arrow Functions
function addNum2(...nums) {
  let total = nums.reduce((x, y) => x + y);
  return total;
}

let numList2 = addNum2(1, 2, 3, 4);
document.getElementById("example13").innerText = numList2;

// Default Params
function addNum3(numArray = []) {
  let total = 0;
  numArray.forEach((element) => {
    total += element;
  });

  return total;
}

document.getElementById("example14").innerText = addNum3([12, 12, 50]);
document.getElementById("example15").innerText = addNum3();

// Includes
let numArray5 = [1, 2, 3, 4, 5];
document.getElementById("example16").innerText = numArray5.indexOf(0); // -1 not found
document.getElementById("example17").innerText = numArray5.includes(0); // false
document.getElementById("example18").innerText = numArray5.includes(4); // true

// Import ES6
import { codes } from "./extra.js";
codes.push(2021);
document.getElementById("example19").innerText = codes;

// padStart and padEnd
let string1 = "Paulie";
string1 = string1.padStart(10, "*");
document.getElementById("example19").innerText = string1;

// Classes
import { Animal, Cat } from "./animal.js";
let cat = new Animal("Cat", 4);
cat.type = "Tiger";
document.getElementById("example21").innerText = `${cat.type} ${
  cat.legs
} ${cat.makeNoise("Meow")} ${Animal.showPrice()} ${cat.metaData}`;

// Override
let newCat = new Cat("Siamese", 3);
document.getElementById("example22").innerText = `${newCat.type} ${
  newCat.legs
} ${newCat.makeNoise()} ${newCat.metaData}`;

// Trailing commas
function addStuff(param) {
  const example = {
    name: "Rory",
  };
}

// Async and Await
const apiUrl = "https://catfact.ninja/fact";

function callAPI() {
  fetch(apiUrl)
    .then((r) => r.json())
    .then((json) => {
      document.getElementById("example23").innerText = json.fact;
    })
    .catch((ex) => {
      document.getElementById(
        "example23"
      ).innerText = `Error in Call to ${apiUrl}`;
    });
}

callAPI();

// Now with less code
async function lessCodeCallToAPI() {
  const response = await fetch(apiUrl); // same endpoint
  const json = await response.json();
  document.getElementById("example24").innerText = json.fact;
}

lessCodeCallToAPI();

// Promise
function resolveAfter3Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved"); // wait for three seconds then return Resolved
    }, 3000);
  });
}

resolveAfter3Seconds().then((data) => {
  document.getElementById("example25").innerText = data;
});

async function getAsyncData() {
  const result = await resolveAfter3Seconds();
  document.getElementById("example26").innerText = result;
}

getAsyncData();

// Sets
const exampleSet = new Set([
  1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 8, 8, 8, 9, 10,
]);

exampleSet.add(11);
exampleSet.add(12);
exampleSet.add(1);
exampleSet.delete(5);

document.getElementById("example27").innerText = `Sets: size=${
  exampleSet.size
} ${exampleSet.has(1)} ${exampleSet.has(5)} `;

exampleSet.clear();

document.getElementById(
  "example28"
).innerText = `Sets: size=${exampleSet.size}`;
