export const createNav = () => {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav-links");
    

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        console.log(burger);
    });
}
