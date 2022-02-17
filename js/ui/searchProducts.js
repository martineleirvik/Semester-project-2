import { renderProducts } from "./renderProducts.js";

export function searchProducts(result) {

    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProduct = result.filter(function (card) {
            if(card.title.toLowerCase().includes(searchValue) || card.description.toLowerCase().includes(searchValue)){
                return true;
            }
        });

        renderProducts(filteredProduct);
    }
}