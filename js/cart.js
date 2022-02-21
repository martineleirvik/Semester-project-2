import { getFromStorage } from "./utils/storage.js";
import { clearKeyStorage } from "./utils/storage.js";

const products = getFromStorage("products");
const cartContainer = document.querySelector(".cart-container");

if(products.length === 0) {
    cartContainer.innerHTML = "No products in the cart.";
}

products.forEach((product) => {
    cartContainer.innerHTML += `<div class="cart-card">
                                    <div class="cart-product">
                                        <img class="cart-image" src="${product.image}" alt="${product.alt}">
                                        <h3>${product.title}</h3>
                                    </div>
                                   
                                        <span class="cart-price">$${product.price}</span>
                                        <a class="cart-view" href="productDetails.html?id=${product.id}">View product</a>
                                        <div class="cart-quantity">
                                            <input class="cart-quantity-input" type="number" value="1">
                                            <button class="btn-remove" type="button" data-id="${product.id}">Remove</button>
                                        </div>
                                    
                                </div>`

});


const removeCartProductBtn = document.querySelectorAll(".btn-remove");

const total = document.querySelector(".cart-total");
const parseData = JSON.parse(localStorage.getItem("products"));
let cartTotal = 0;

console.log(parseData);

parseData.map(data => {
    for(var i = 0; i < data.price.length; i++)
    {
        cartTotal += parseFloat(data.price[i]);
    }

});

        
 total.innerHTML += `<p class="amount">Total: <strong>${cartTotal}</strong></p>`;
