import { baseUrl } from "../settings/api.js";

const productsContainer = document.querySelector(".container");
const noProductsContainer = document.querySelector(".noProducts");

export function renderProducts(render) {

    productsContainer.innerHTML = "";
    noProductsContainer.innerHTML = "";

    render.forEach(function (product){

        let checkIfImage = "";
        
        if(product.image) {
            checkIfImage = baseUrl + product.image.url;
        }
        if (product.image_url) {
            checkIfImage = product.image_url;
        }

        productsContainer.innerHTML += `<a class="card" href="productDetails.html?id=${product.id}">
                                            <img class="product-image" src="${checkIfImage}" alt="${product.title}">
                                            <div class="product-info">
                                            <h3>${product.title}</h3>
                                            <h4>$${product.price}</h4>
                                            </div>
                                            <p><button>View Product</button></p>
                                        </a>`;
    });

    if(render.length === 0) {
        return noProductsContainer.innerHTML = `<p id="noSearchValue">No products.</p>`;
    }
}