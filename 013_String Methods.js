let myName = "Mani";
// --> To find lenght of a string 
console.log(myName.length);

console.log(myName);
// --> To Change it into UpperCase
console.log(myName.toUpperCase());
// --> To Change it into LowerCase
console.log(myName.toLowerCase());

// -->  To slice strings
console.log(myName.slice(1,3));
console.log(myName.slice(1));
console.log(myName[1]);

// --> To add strings
let n = " 89"
console.log(myName.concat(n));

// --> To get rid of whitespaces
let whitespaces = "      Usman       "
console.log(whitespaces);
console.log(whitespaces.trim());

                                        //    Quick Quiz

// let me = "Usman"
// for(let i = 0 ; i< me.length; i++){
//     console.log(i);
// }
let me2 = "Usman"
for(let i = 0 ; i< me2.length; i++){
    console.log(me2[i]);
}