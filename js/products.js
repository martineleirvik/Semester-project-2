import { baseUrl } from "./settings/api.js";
import { renderProducts } from "./ui/renderProducts.js";

const productsUrl = baseUrl + "products";
const productsContainer = document.querySelector(".products");


(async function() {

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log(json);

        productsContainer.innerHTML = "";

        renderProducts(json);

        
    }
    catch (error) {
        console.log(error)
    }

})();