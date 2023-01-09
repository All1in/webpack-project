"use strict";
let userNum;
let m;
let n;
do {
    userNum = prompt("Enter integer last range number:");
} while (
    +userNum % 1 !== 0 ||
    !userNum ||
    isNaN(+userNum) ||
    +userNum < 0
    )

if (+userNum >= 5) {
    for (let i = 0; i <= userNum; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
} else console.log("Sorry, no numbers");

alert("First part done!")
console.log();
do {
    m = prompt("Enter integer start number:");
    n = prompt("Enter integer last number:");
} while (
    !m || !n ||
+m % 1 !== 0 || +n % 1 !== 0 ||
isNaN(+m) || isNaN(+n) ||
+m > +n)

for (let x = m; x <= n; x++) {
    if (x % 1 === 0) {
        console.log(x);
    }
}
