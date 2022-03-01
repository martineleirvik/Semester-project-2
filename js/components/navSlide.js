export const navSlide = () => {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".menu-container");
    

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

    });
}