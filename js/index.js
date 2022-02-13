import { baseUrl } from "./settings/api.js";
import { createHero } from "./ui/hero.js";
import loginMenu from "./components/loginMenu.js";

const heroUrl = baseUrl + "home";
const heroContainer = document.querySelector(".hero-banner");

loginMenu();

(async function() {

    try {
        const response = await fetch(heroUrl);
        const json = await response.json();
        console.log(json);

        createHero(json);

        
    }
    catch (error) {
        console.log(error)
    }

})();