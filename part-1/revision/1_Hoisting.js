// Hoisting is a phenomenon in Javascript of accessing the variable and function before their initialization. 


var a = 10;

function a1(){
    console.log(`Hello`);
}

console.log(a);
a1();
console.log(`---------`);
console.log(a1);
