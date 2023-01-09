"use strict";

const inputHandler = (e) => {
    const btn = document.querySelectorAll(".btn");
    const blue = document.querySelectorAll(".blue");
    if (e.key) {
        btn.forEach((el) => {
            if (e.key.toLowerCase() === el.textContent.toLowerCase()) {
                if (blue.length) {
                    blue.forEach((elem) => {
                        elem.classList.remove("blue");
                        el.classList.add("blue");
                    })
                } else {
                    el.classList.add("blue");
                }
            }
        });
    }
};

document.addEventListener("keydown", inputHandler);
