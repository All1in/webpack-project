"use strict";
function filterBy(arr, type) {
    const newArr = [];
    arr.forEach((el) => {
        if (typeof el !== type) {
            newArr.push(el);
        }
    });
    return newArr;
}

console.log(filterBy(['hello', 'world', 23, '23', null], "string"))
console.log(filterBy(['hello', 'world', 23, '23', null], "number"))
