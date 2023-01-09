"use strict";
const stop = document.querySelector("#stop-btn");
const cont = document.querySelector("#continue-btn");
const images = [...document.querySelectorAll(".image-to-show")];
let flag = false;

stop.addEventListener("click", () => flag = true);
cont.addEventListener("click", () => flag = false)

const timer = () => {
    let i = 1;

    setInterval(() => {
        if (!flag) {
            if (i > images.length - 1) {
                i = 0;
            }
            images[i].classList.add("active");
            i - 1 < 0 ?
                images[images.length - 1].classList.remove("active") :
                images[i - 1].classList.remove("active");
            i++;
        } else {
            return false;
        }
    }, 3000);
}
timer();



