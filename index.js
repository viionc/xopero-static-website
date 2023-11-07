const burger = document.querySelector(".burger");
const navList = document.querySelector("nav > ul");
const scrollTopButton = document.querySelector(".scroll-top");
let show = false;
burger.addEventListener("click", () => {
    navList.classList.toggle("show");
    burger.querySelector("img").src = show ? "./assets/burger.svg" : "./assets/x-icon.svg";
    show = !show;
});

window.addEventListener("scroll", () => {
    window.scrollY > 125 ? scrollTopButton.classList.add("show") : scrollTopButton.classList.remove("show");
});
