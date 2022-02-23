import { baseUrl } from "./settings/api.js"
import { getFromStorage } from "./utils/storage.js";
import loginMenu from "./components/loginMenu.js";


const detailsContainer = document.querySelector(".details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if(!id) {
    document.location.href = "/";
}

const detailsUrl = baseUrl + "products/" + id;

(async function () {
    const response = await fetch(detailsUrl);
    const details = await response.json();

    detailsContainer.innerHTML = "";

    detailsContainer.innerHTML = `<div class="product-wrapper">
                                    <div class="image-wrapper"> 
                                        <img class="product-detail-image" src="http://localhost:1337${details.image.formats.medium.url}" alt="${details.image.alternativeText}">
                                    </div>
                                    <div class="text-wrapper">
                                        <h2>${details.title}</h2>
                                        <p id="price">$${details.price}</p>
                                        <p id="description">Product description:</p>
                                        <p id="description-text">${details.description}</p>
                                        <button class="addBtn" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" data-image="http://localhost:1337${details.image.formats.medium.url}" data-alt="${details.image.alternativeText}">Add to Cart</button>
                                    </div>
                                </div>`;



const addButton = document.querySelectorAll(".text-wrapper button");
console.log(addButton);

addButton.forEach((button) => {
    button.addEventListener("click", addToCart);

});

function addToCart(event) {
    console.log(event);

    if(this.innerHTML === "Add to Cart"){
        this.innerHTML = "Added to Cart";
    }
    else {
        this.innerHTML = "Add to Cart";
    }

    const {id, title, price, image, alt} = this.dataset;

    console.log("id", id);
   
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

function checkIfInStorage() {
    if(localStorage.getItem("products", id) ) {
        addButton.innerHTML = "Add to Cart"
    }
}

