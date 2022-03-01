import { baseUrl } from "./settings/api.js";
import loginMenu from "./components/loginMenu.js";
import { editRenderProducts } from "./ui/editRenderProducts.js";

const productsUrl = baseUrl + "products";



(async function() {

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log(json);

        editRenderProducts(json);

    }
    catch (error) {
        console.log(error)
    }

})();