//console.log("Javascript is loaded")
// SECTION 1 - Terms
// What is the difference between 
// interpolation and concatenation?
// interpolation - evaluates a sting of placeholders
// and placeholders are replaced with their value
//    ex: 
// concatenation - uses + to join two or more strings
//    ex: "string" + " " + "string"
//    would bring back string string
//
// What does DRY stand for? Don't repeat yourself
// Why should we pay attention to it? easier to read code
// and easier maintenance
// What tools have we learned to write DRY code?
// functions, IDs, classes

//SECTION 2 - Boolean Expressions



const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';	

//a_b
//if (a <= b) {
 //	console.log("True");
//} else {
//	console.log("False")
//}

//c_d
//if (c >= d) {
 //	console.log("True");
//} else {
//	console.log("False")
//}

//'Name' __ 'Name'
//if (e === e) {
//	console.log("True");
//}

//a __ b __ c
//if (a <= b && a <= c && b <= c) {
//	console.log("True");
//}

//a __ a __ d
//if (a <= d) {
//	console.log("True");
//}

//e __ 'Kevin'
//if (e == "Kevin") {
//	console.log("True");
//}

//48 __ '48'
//if (48 == "48") {
//	console.log("True");
//}


// SECTION 3 - While loops
// Answer - Yes, because there is no equation so it will always be true

// Answer2 - No, because runProgram = false

// Answer3 - 21 A's

//let letters = "A";
//let i = 0;
//
//while (i < 20) {
//	letters += "A";
//	i++;
//}
//
//console.log(letters);

// SECTION 4 - For loops
// While loops - loop through while the condition is true
// For loops - loop through a number of times

//for (var i = 0; i < 999; i++) {
//	console.log(i);
//}

// The first part of the control statement is: sets var
// The second part of the control statement is: condition
// The third part of the control statement is: increases the value

//for (var i = 999; i > 0; i--) {
//	console.log(i);
//}



for (var i = 0; i <= 10; i++) {
	console.log("The value of i is: " + i + " of " + i);
}
