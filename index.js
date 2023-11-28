
///// Expanding Functionality//////

const csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let currentCell = 1;
let currentRow = 0;
let rows = [];
let columns = [];

for (let i = 0; i < csv.length; i++) {
    if (csv[i] === ",") {
        currentCell++;
    } else if (csv[i] === "\n") {
        // Store columns in the current row
        rows[currentRow] = columns;

        // Reset variables for the next row
        currentCell = 1;
        currentRow++;
        columns = [];
    } else {
        if (currentRow === 0) {
          //store the heading row
            columns.push(csv[i]);
        } else {
            // Store data in columns array
            columns.push(csv[i]);
        }
    }
}

// catche two-dimensional array
console.log(rows);
////////Part 3: Transforming Data////////
const csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let currentCell = 1;
let currentRow = 0;
let rows = [];
let columns = [];
let headings = [];
let objects = [];

for (let i = 0; i < csv.length; i++) {
    if (csv[i] === ",") {
        currentCell++;
    } else if (csv[i] === "\n") {
        if (currentRow === 0) {
            // Store the headings in lowercase for consistency
            headings = columns.map((heading) => heading.toLowerCase());
        } else {
            // Create an object for the current row
            const rowObject = {};
            columns.forEach((value, index) => {
                rowObject[headings[index]] = value;
            });
            objects.push(rowObject);
        }

        // Reset variables for the next row
        currentCell = 1;
        currentRow++;
        columns = [];
    } else {
        // Store data in columns array
        columns.push(csv[i]);
    }
}

console.log(objects);


Your existing array of objects
let objects = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
];
    ////// Part 4: Sorting and Manipulating Data/////

// Step 1: Remove the last element from the sorted array
objects.pop();

// Step 2: Insert the following object at index 1
const newObject1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
objects.splice(1, 0, newObject1);

// Step 3: Add the following object to the end of the array
const newObject2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
objects.push(newObject2);

// Log the updated array
console.log(objects);

// Step 4: Calculate the average age of the group using a loop
let totalAge = 0;
for (let i = 0; i < objects.length; i++) {
  totalAge += parseInt(objects[i].age);
}

const averageAge = totalAge / objects.length;
console.log(`Average Age: ${averageAge}`);

let objects = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];
//////////////Part 5: Full Circle///////////
// Transform the array of objects back into CSV format
let csvResult = '';

// Create the heading row
const headings = Object.keys(objects[0]);
csvResult += headings.join(',') + '\n';

// Create rows from objects
for (let i = 0; i < objects.length; i++) {
  const values = Object.values(objects[i]);
  csvResult += values.join(',') + '\n';
}

// Log the resulting CSV format
console.log(csvResult);