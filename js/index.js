import { baseUrl } from "./settings/api.js";

const articlesUrl = baseUrl + "products";

(async function() {

    try {
        const response = await fetch(articlesUrl);
        const json = await response.json();
        console.log(json);

        

        
    }
    catch (error) {
        console.log(error)
    }

})();