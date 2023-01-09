"use strict";

const printOnPage = (arr, parent = document.body) => {
    const newArr = arr.map((el) => {
        return Array.isArray(el) ? printOnPage(el) : `<li> ${el} </li>`;
    });
    let seconds = 3;
    const timer = setInterval(() => {
        if (seconds > 0) {
            parent.querySelector("#root").textContent = `Время до очистки: ${seconds} c`;
            --seconds;
        } else {
            parent.remove()
            clearInterval(timer);
        }
    }, 1000);

    return parent.innerHTML = `<h1 id="root"></h1> <ul> ${newArr.join("")}</ul>`;
}

printOnPage([
    "hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv",
    ["1", "2", "3", "sea", "user", 23],
    32, 43, 55,
    ["dsf", 33, 33, 11]
]);
