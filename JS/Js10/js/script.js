"use strict";

const hide = document.querySelectorAll(".fas");
const inputs = document.querySelectorAll(".password");
const submit = document.querySelector(".btn");
const label = document.querySelectorAll(".input-wrapper");
const p = document.createElement("p");

const hideHandler = (e) => {

    inputs.forEach((el) => {
        if (el.getAttribute("data-name") ===
            e.target.getAttribute("data-name")) {

            el.type === "password" ? el.type = "text" : el.type = "password";
            e.target.classList.toggle("fa-eye-slash");
        }
    });
};

hide.forEach((e) => {
    e.addEventListener("click", hideHandler);
});

inputs.forEach((e) => {
    e.addEventListener("focus", () => p.remove());
});

if (submit.type === "submit") {
    submit.addEventListener("click", () => {
        if (inputs[0].value === inputs[1].value) {
            alert("You are welcome!");
        } else {
            p.textContent = "Password are not equals!";
            p.style.color = "red";
            label[1].after(p);
        }
    });
}
