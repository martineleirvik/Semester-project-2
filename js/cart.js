import { getFromStorage } from "./utils/storage.js";

const products = getFromStorage("products");
const cartContainer = document.querySelector(".cart-container");

console.log(products);

if(products.length === 0) {
    cartContainer.innerHTML = "No products in the cart.";
}

products.forEach((product) => {
    cartContainer.innerHTML += `<div class="cart-card">
                                    <h3>${product.title}</h3>
                                    <p>$${product.price}</p>
                                    <a class="view" href="productDetails.html?id=${product.id}">View product</a>
                                </div>`

});