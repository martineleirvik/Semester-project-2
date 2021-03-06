import navBar from "./components/navBar.js";
import { navSlide } from "./components/navSlide.js";
import { getFromStorage } from "./utils/storage.js";
import { cartNumbers } from "./components/cartNumbers.js";

navBar();
navSlide();
cartNumbers();

const products = getFromStorage("products");
const cartContainer = document.querySelector(".cart-container");
const noProd = document.querySelector(".no-products");

if(products.length === 0) {
    noProd.innerHTML = "No products in the cart.";
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
                                            <input class="cart-quantity-input" type="number" min="1" value="1">
                                            <button class="btn-remove" type="button" data-id="${product.id}">Remove</button>
                                        </div>
                                    
                                </div>`

});



const total = document.querySelector(".cart-total");
const parseData = JSON.parse(localStorage.getItem("products"));
let cartTotal = 0;

parseData.map(data => { 
        cartTotal += parseFloat(data.price);
});
        
 total.innerHTML += `<p class="amount">Total: <strong>$${cartTotal.toFixed(2)}</strong></p>`;



 const purchaseBtn = document.querySelector(".cart-purchase")

 purchaseBtn.addEventListener("click", clearChartStorage);

 function clearChartStorage () {

    const purchase = confirm("Do you want to purchase the products?");

            if(purchase) {
                localStorage.removeItem("products");
                window.location.reload();
            }
 }

 const removeCartProductBtn = document.querySelectorAll(".btn-remove");
    for (var i = 0; i < removeCartProductBtn.length; i++) {
    var button = removeCartProductBtn[i]
    button.addEventListener("click", handleRemovingProduct)
}

export function getProductFromStorage () {
    const removeFromStorage = localStorage.getItem("products");

    if(!removeFromStorage) {
        return []
    }
    return JSON.parse(removeFromStorage);
}

function handleRemovingProduct() {
    const id = this.dataset.id;

    const currentProd = getProductFromStorage();

    const productIsInStorage = currentProd.find(function(find) {
        return find.id === id;
    });

    if(productIsInStorage) {
        const newCartProducts = currentProd.filter( find => find.id !== id)
        saveProduct(newCartProducts);
        window.location.reload();
    }
}

function saveProduct(prod) {
    localStorage.setItem("products", JSON.stringify(prod));
}