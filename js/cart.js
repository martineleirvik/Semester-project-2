import { getFromStorage } from "./utils/storage.js";

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
                                            <input class="cart-quantity-input" type="number" value="1">
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
        
 total.innerHTML += `<p class="amount">Total: <strong>$${cartTotal}</strong></p>`;



 const purchaseBtn = document.querySelector(".cart-purchase")

 purchaseBtn.addEventListener("click", clearChartStorage);

 function clearChartStorage () {

    const purchase = confirm("Do you want to purchase the products?");

            if(purchase) {
                localStorage.removeItem("products");
                window.location.reload();
            }
 }


 const inputQuantity = document.querySelector(".cart-quantity-input").value;
 console.log(inputQuantity);



 const removeCartProductBtn = document.querySelectorAll(".btn-remove");
    console.log(removeCartProductBtn);
    for (var i = 0; i < removeCartProductBtn.length; i++) {
    var button = removeCartProductBtn[i]
    button.addEventListener("click", removeProduct)
}

function removeProduct (event) {
    var buttonisClicked = event.target
    console.log(buttonisClicked);
    localStorage.removeItem("products");
    window.location.reload();
}