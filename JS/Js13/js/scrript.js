"use strict";

const theme = document.querySelector(".fa-moon");
const body = document.body;
const logo = document.querySelector(".logo-link");
const header = document.querySelector(".header-list");
const sidebar = document.querySelector(".sidebar-list");
const footer = document.querySelector(".footer-navbar");

const setDark = () => {
    theme.style.color = "#fff";
    body.classList.add("dark");
    logo.classList.add("logo-dark");
    header.classList.add("header-dark");
    sidebar.classList.add("sidebar-dark");
    footer.classList.add("footer-dark");
    localStorage.setItem("user_theme", "dark");
};

const setLight = () => {
    theme.style.color = "#000";
    body.classList.remove("dark");
    logo.classList.remove("logo-dark");
    header.classList.remove("header-dark");
    sidebar.classList.remove("sidebar-dark");
    footer.classList.remove("footer-dark");
    localStorage.setItem("user_theme", "light");
};

localStorage.getItem("user_theme") === "dark" ? setDark() : setLight();

let flag = true;
theme.addEventListener("click", () => {
    flag ? setDark() : setLight();
    flag = !flag
});
