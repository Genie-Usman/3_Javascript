// Prompt is used to ask something
// Alert is tell to ask something

// --> Copy This code into an HTML File since VS CODE Terminal will not run it 

// --> Prompt And Alert 

let sign = prompt(`What is your sign?`);
    alert(`Your sign is ${sign}`);

// --> Using If, Else-if, Else Statements

let age = prompt("What is Your Age?")
a = Number.parseInt(age);
if (age<18) {
    alert("You Cannot Drive!");
} else if (age=>18) {
    alert("You Can Drive!");
}
else{
  alert("Invalid Input!");
}

// --> Using Switch Statement 

let b = prompt("What is Your Sign?");
switch (b.toLowerCase()) { 
  case 'aquarius':
    alert("Your Sign is Aquarius");
    break;
  case `virgo`:
    alert("Your Sign is Virgo");
    break;
  case `aries`:
    alert("Your Sign is Aries");
    break;
  case `capricorn`:
    alert("Your Sign is Capricorn");
    break;
  case `gemini`:
    alert("Your Sign is Gemini");
    break;
  case `libra`:
    alert("Your Sign is Libra");
    break;
  case `taurus`:
    alert("Your Sign is Taurus");
    break;
  case `cancer`:
    alert("Your Sign is Cancer");
    break;
  case `leo`:
    alert("Your Sign is Leo");
    break;
  case `piscus`:
    alert("Your Sign is Piscus");
    break;
  case `sagittarius`:
    alert("Your Sign is Sagittarius");
    break;
  case `scorpio`:
    alert("Your Sign is Scorpio");
    break;

  default:
    alert("Invalid Input")
    break;
}
