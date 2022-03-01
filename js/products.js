import { baseUrl } from "./settings/api.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import { displayMessage } from "./components/displayMessage.js"

const productsUrl = baseUrl + "/products";

(async function() {

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log(json);

        renderProducts(json);
        searchProducts(json);
        
    }
    catch (error) {
        displayMessage("error", "An error occured", ".container");
    }

})();