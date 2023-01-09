"use strict";

const tabs = document.querySelectorAll(".tabs .tabs-title");
const content = document.querySelectorAll(".tabs-content .tabs-item");

const listClickHandler = (el) => {

    document.querySelector(".tabs .active").classList.remove("active");
    el.target.classList.add('active');

    content.forEach(elem => {
        elem.classList.add("hidden");

        if (
            elem.getAttribute("data-name") ===
            el.target.getAttribute("data-name")) {
            elem.classList.remove("hidden");
            elem.classList.add("active");
        }
    });

};

tabs.forEach((e) => {
    e.addEventListener("click", listClickHandler);

});
