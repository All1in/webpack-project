// "use strict";
// let userName = String(prompt("Input your name:"));
// let userAge = Number(prompt("Input your age:"));

// while (userName === "" || userAge <= 0 || isNaN(userAge) || userName === "null") {
//     alert("Wrong name or age. Please try again.");
//     userName = String(prompt("Input your name:"));
//     userAge = Number(prompt("Input your age:"));
// }

// if (userAge > 0 && userAge < 18) {
//     alert("You are not allowed to visit this website.");
// } else if (userAge > 18 && userAge <= 22) {
//     const answer = confirm("Are you sure you want to continue?");
//     if (answer === true) {
//         alert("Welcome, " + userName);
//     } else {
//         alert("You are not allowed to visit this website.");
//     }
// } else {
//     alert("Welcome, " + userName);
// }

"use strict";
 let userName = prompt("Input your name");
 let userAge = prompt("Input your age");

//  if (userName ==="" || userAge <= 0 || isNaN(userAge) || userName ==="null");
//   alert("Wrong name or age. Please try again.");
while (userName === "" || userAge <= 0 || isNaN(userAge) || userName === "null") {
    alert("Wrong name or age. Please try again.");
    userName = String(prompt("Input your name:"));
    userAge = Number(prompt("Input your age:"));
}