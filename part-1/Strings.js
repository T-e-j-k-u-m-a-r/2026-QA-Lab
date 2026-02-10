// Assignment

/**
 * WAP to accept the fullname from the user and then generate the username in this format
 * Example: fullname = tej
 * 
 * Username = @tej3
 * 
 * where @ = prefix & 3 = length of the fullname
 * 
 * Note: Length in String is not a method or a function, Its a property. 
 * 
 */





































fullName = prompt(`Enter the full name...`);

console.log(`fullname = ${fullName}`);
console.log(`type of fullname = `+typeof(fullName));

let prefix = "@";
let suffix = String(fullName).length;

console.log(`Prefix = ${prefix}`);
console.log(`Suffix = ${suffix}`);

const userName = prefix+fullName+suffix;

console.log(`The preferred username is :: ${userName}`);


