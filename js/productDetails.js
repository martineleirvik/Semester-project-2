import { baseUrl } from "./settings/api.js"

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
    console.log(details);

    detailsContainer.innerHTML = `<div class="product-wrapper">
                                    <div class="image-wrapper"> 
                                        <img class="product-detail-image" src="http://localhost:1337${details.image.formats.medium.url}" alt="${details.image.alternativeText}">
                                    </div>
                                    <div class="text-wrapper">
                                        <h2>${details.title}</h2>
                                        <p>$${details.price}</p>
                                        <p>Product description</p>
                                        <p>${details.description}</p>
                                        <button id="addBtn">Add to Cart</button>
                                    </div>
                                </div>`;


})();

const addButton = document.querySelectorAll(".text-wrapper button");

addButton.forEach((button) => {
    button.addEventListener("click", addToCart);

});

function addToCart(event) {
    console.log(event);
}

