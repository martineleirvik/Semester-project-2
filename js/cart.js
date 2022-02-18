import { getFromStorage } from "./utils/storage.js";

const products = getFromStorage("products");
const cartContainer = document.querySelector(".cart-container");

console.log(products);

products.forEach((product) => {
    cartContainer.innerHTML += `<div class="cart-card">
                                    <h3>${product.title}</h3>
                                    <p>$${product.price}</p>
                                    <a href="productDetails.html?id=${product.id}">View product</a>
                                </div>`

});