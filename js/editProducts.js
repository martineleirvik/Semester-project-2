import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";
import navBar from "./components/navBar.js";
import { editRenderProducts } from "./ui/editRenderProducts.js";

navBar();

const productsUrl = baseUrl + "/products";

(async function() {

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log(json);

        editRenderProducts(json);

    }
    catch (error) {
        displayMessage("error", "An error occured", ".container");
    }

})();