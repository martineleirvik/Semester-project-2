import { baseUrl } from "./settings/api.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";

const productsUrl = baseUrl + "products";


(async function() {

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log(json);

        renderProducts(json);
        searchProducts(json);
        
    }
    catch (error) {
        console.log(error)
    }

})();