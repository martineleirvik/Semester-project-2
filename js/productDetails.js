import { baseUrl } from "./settings/api.js";
import navBar from "./components/navBar.js";
import { getFromStorage } from "./utils/storage.js";
import { navSlide } from "./components/navSlide.js";
import { cartNumbers } from "./components/cartNumbers.js";

navBar();
navSlide();
cartNumbers();

const detailsContainer = document.querySelector(".details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const add = "Add to Cart";
const added = "Added to Cart";

if(!id) {
    document.location.href = "/";
}

const detailsUrl = baseUrl + "/products/" + id;

(async function () {
    const response = await fetch(detailsUrl);
    const details = await response.json();

    detailsContainer.innerHTML = "";

    let checkIfImage = "";
        
    if(details.image) {
        checkIfImage = baseUrl + details.image.url;
    }
    if (details.image_url) {
        checkIfImage = details.image_url;
    }

    detailsContainer.innerHTML = `<div class="product-wrapper">
                                    <div class="image-wrapper"> 
                                        <img class="product-detail-image" src="${checkIfImage}" alt="${details.title}">
                                    </div>
                                    <div class="text-wrapper">
                                        <h2>${details.title}</h2>
                                        <p id="price">$${details.price}</p>
                                        <p id="description">Product description:</p>
                                        <p id="description-text">${details.description}</p>
                                        <button class="addBtn" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" data-image="${checkIfImage}" data-alt="${details.title}">Add to Cart</button>
                                    </div>
                                </div>`;

    const addBtn = document.querySelector(".text-wrapper .addBtn");
    const currentProducts = getFromStorage("products");
    const productExsist = currentProducts.find(function(item) {
        return item.id === id;
    });

    if(productExsist) {
        productExsist.id === id;
        addBtn.innerHTML = added;
    }
    else {
       addBtn.innerHTML = add;  
    }

    const addButton = document.querySelectorAll(".text-wrapper button");
    addButton.forEach((button) => {
        button.addEventListener("click", addToCart);

});



function addToCart(event) {
    console.log(event);

    if(this.innerHTML === add){
        this.innerHTML = added;
    }
    else {
        this.innerHTML = add;
    }

    const {id, title, price, image, alt} = this.dataset;
   
    const currentProducts = getFromStorage("products");

    const productExsists = currentProducts.find(function(item) {
        return item.id === id;
    });

    if(!productExsists) {
        const product = { id: id, title: title, price: price, image: image, alt: alt};
        currentProducts.push(product);
        saveToStorage(currentProducts);
    }
    else {
        const newProducts = currentProducts.filter((newest) => newest.id !== id);
        saveToStorage(newProducts);
    }
}

function saveToStorage(prod) {
    localStorage.setItem("products", JSON.stringify(prod));
}

})();