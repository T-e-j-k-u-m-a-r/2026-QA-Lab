

//Call back function: 

// var cF = function greet(){
//     console.log(`I'm from callback function greet...`)
// }

// function start(cb){
//     cF();
//     console.log(`I am from start function...`)
// }

// start(cF);

// Function statement or Function declartion and invoking: 

// function greet(){
//     console.log(`hello, good morning`)
// }

// greet();

// Function expressions: 

// let f1 = function formulaOneRace(){
//     console.log(`Welcome to F1 racing... `)
// }

// f1();

// Function with zero and non-zero parameters and arguments passing. 


// // Zero parameterized function
// let f1e = function f1(){
//     console.log(`Hello, I'm from f1 - Zero Parameterized function`)
// }

// // Parameterized function 
// let f2e = function f2(num){
//     console.log(`Hello, Im from f2 - Parameterized function, Random number = `+num)
// }

// f1e();
// f2e(23); //Argument passing

// Anonymous function: 

// let f1 = function(){
//     console.log(`Hello, Im an anonymous function...`)
// }

// f1();

// Call back function: 

// Anonymous function:

// console.log(`----------------`);

// let f1 = function(){
//     console.log(`F1:`)
// }

// function f2(cb){
//     cb();
//     console.log(`F2:`)
// }

// f2(f1);

// console.log(`----------------`);

// Call back function: A function which expects another function as a parameter or returns a function is called call back function. 

// let f1 = function (){
//     console.log(`call back function, F1: `)
// }

// function f2(cb){
//     cb();
//     console.log(`F2: `)
// }

// f2(f1)