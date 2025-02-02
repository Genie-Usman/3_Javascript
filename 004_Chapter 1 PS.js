// Q1. Create a Variable of type string and try to add a number into it.

let a = "Mani";
let b = 89;
console.log(a + b);

// Q2. Use "typeof" operator to find the data type of the string in first question

console.log(typeof (a + b));

// Q3. Create a const object in javascript. Can you change it to hold a number later?

const c = {
    name: "Mani",
    age: 20,
    class: "BSCS",
    university: "Superior University"
}
// c = 45;
// You cannot change it to hold a number later cause it's a constant and already being assigned to an object
console.log(c);

// Q4. Try to add a new key to Q3. Were you able to do it?
c['friend'] = "Rehaan";
c.friend = "Waleed";
console.log(c);
// Yes, it can be done 

// Q5. Write a Javascript Program to create a word-meaning dictionary of 5 words.

const d = {
    boundary: "a line that marks the limits of an area",
    abrogate: "To revoke",
    artless: "Without deception",
    asperity: "Harsh in tone",
    belie: "To convey a misleading impression of; to distort",
}
console.log(d.abrogate);
