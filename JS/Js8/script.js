"use strict";

const root = document.querySelector("#root");

const input = document.createElement("input");
input.className = "price";
input.placeholder = "Price"
root.prepend(input)

const focusHandler = () => {
    input.classList.remove("border-red");
    input.classList.remove("color-green");
    input.value = "";
}
const focusOutHandler = () => {
    const value = input.value;
    if (value) {
        const span = document.createElement("span");
        const p = document.createElement("p");

        const btn = document.createElement("button");
        btn.type = "button"
        btn.className = "btn"
        btn.textContent = "X"

        btn.addEventListener("click", () => {
            span.remove();
            btn.remove();
            input.value = "";
            input.classList.remove("color-green");
        });
        if (typeof +value === "number" && !isNaN(+value) && value > 0) {
            input.classList.add("color-green");
            span.textContent = `Текущая цена: ${input.value} `;
            input.before(span);
            span.append(btn);
        } else {
            p.textContent = `Please enter correct price.`;
            input.classList.add("border-red");
            input.value = "";
            input.after(p);
        }
    }
}

input.addEventListener("focus", focusHandler);
input.addEventListener("focusout", focusOutHandler);
