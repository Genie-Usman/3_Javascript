// Q1. What will the following print in JavaScript. console.log("har\"")

let a = "har\"";
console.log(a.length);
// it prints 4

// Q2. Explore the include, startwith and endwith function of a JavaScript.

// --> Include 
let sentence = "The quick brown fox jumps over the lazy dog";
let word = "fox"
console.log(sentence.includes(word));
console.log(`The word ${word} ${sentence.includes(word)? "is" : "is not"} in the sentence`);

// --> Start With
let str = "My Name is Khan";
console.log(str.startsWith("My"));

// --> Ends With
let str2 = "My Name is Khan";
console.log(str2.endsWith("Khan"));

// Q3. Write a Program to convert a given string to lowercase.

let myname = "USMAN";
console.log(myname.toLowerCase());

// Q4. Extract The amount out of this string. "Please give Rs 1000".

let str3 = "Please give Rs 1000"
console.log(str3.slice(15));

// Q5. Try to change the 4th character of a giiven string. Were you able to do it?

let king = "Joker";
king[4] = "h";
console.log(king); 

// --> No You can't change any character of a string since a string is immutable which means you can't change character of an existing string.