import { baseUrl } from "./settings/api.js";

const productsUrl = baseUrl + "products";

(async function() {

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log(json);

        

        
    }
    catch (error) {
        console.log(error)
    }

})();