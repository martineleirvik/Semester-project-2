import { baseUrl } from "./settings/api.js";
import { createHero } from "./ui/hero.js";

const heroUrl = baseUrl + "home";
const heroContainer = document.querySelector(".hero-banner");



(async function() {

    try {
        const response = await fetch(heroUrl);
        const json = await response.json();
        console.log(json);

        heroContainer.innerHTML = "";

        createHero(json);

        
        
    }
    catch (error) {
        console.log(error)
    }

})();