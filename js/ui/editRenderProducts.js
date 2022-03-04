import { baseUrl } from "../settings/api.js";

const productsContainer = document.querySelector(".container");

export function editRenderProducts(render) {

    productsContainer.innerHTML = "";


    render.forEach(function (product){

        let checkIfImage = "";
        
        if(product.image) {
            checkIfImage = baseUrl + product.image.url;
        }
        if (product.image_url) {
            checkIfImage = product.image_url;
        }

        productsContainer.innerHTML += `<a class="card" href="editProductsForm.html?id=${product.id}">
                                            <div class="editcard">
                                                <img class="product-image" src="${checkIfImage}" alt="${product.title}">
                                                <h4>${product.title}</h4>
                                            </div></a>`
    });
};