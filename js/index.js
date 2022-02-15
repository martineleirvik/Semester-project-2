import { baseUrl } from "./settings/api.js";
import { createHero } from "./ui/hero.js";
import loginMenu from "./components/loginMenu.js";
import { getFeaturedProducts } from "./ui/featuredProducts.js";

const productsUrl = baseUrl + "products";
const heroContainer = document.querySelector(".hero-banner");

loginMenu();

(async function() {

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log(json);

        createHero(json);
        getFeaturedProducts(json);

        
    }
    catch (error) {
        console.log(error);
    }

})();