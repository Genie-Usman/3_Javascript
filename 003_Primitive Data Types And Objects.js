// There are 7 Primitive Data Types 
// The best way to memorize them is by memorizing "NN SS BB U"
// N = null
// N = Number 
// S = String 
// S = Symbol 
// B = Boolean
// B = BigInt
// U = undefined
let a = null;
let b = 70;
let c = "Mani";
let d = Symbol(`This is a symbol.`);
let e = true; //it can also be false
let f = BigInt(50)+BigInt(50);
let g = undefined;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

// Objects (These are also called Non Primitive Data Types)

let item = {
    "Mani": true,
    "Usman": false,
    "Sana": 69,
    "Arham": null,
    "Rehaan": undefined,
    "Waleed": "BSCS",
}
console.log(item["Sana"]);