
console.log("Pratibha");

const accountID = 67566;
let accountEmail = "prat@gmail.com";
var accountPassword ="jjjj";
let accountState;
let accountBill=45666;

/*
Prefer not to use var because of issue in block scope and functional scope
*/

// const and let can use
// when you define variable without value then type will be undefined.

console.log(accountID);
console.log(accountEmail);
console.table([accountID,accountEmail,accountPassword,accountState,accountBill]);
