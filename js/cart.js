import { getFromStorage } from "./utils/storage.js";

const products = getFromStorage("products");
const cartContainer = document.querySelector(".cart-container");

if(products.length === 0) {
    cartContainer.innerHTML = "No products in the cart.";
}

products.forEach((product) => {
    cartContainer.innerHTML += `<div class="cart-card">
                                    <img class="cart-image" src="${product.image}" alt="${product.alt}">
                                    <h3>${product.title}</h3>
                                    <span class="cart-price">$${product.price}</span>
                                    <a class="cart-view" href="productDetails.html?id=${product.id}">View product</a>
                                    <div class="cart-quantity">
                                        <input class="cart-quantity-input" type="number" value="1">
                                        <button class="btn-remove" type="button">Remove</button>
                                    </div>
                                </div>`

});