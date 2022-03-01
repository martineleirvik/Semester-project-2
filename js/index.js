import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";
import { navSlide } from "./components/nav.js";
import { createHero } from "./ui/hero.js";
import loginMenu from "./components/loginMenu.js";
import { getFeaturedProducts } from "./ui/featuredProducts.js";

const homeUrl = baseUrl + "/home";
const featuredUrl = baseUrl + "/products?featured=true";

navSlide();
loginMenu();

(async function() {

    try {
        const response = await fetch(homeUrl);
        const json = await response.json();
        console.log(json);

        const responseFeat = await fetch(featuredUrl);
        const jsonFeat = await responseFeat.json();
        console.log(jsonFeat);

        createHero(json);
        getFeaturedProducts(jsonFeat);

        
    }
    catch (error) {
        displayMessage("error", "An error occured", ".hero-banner");
    }

})();