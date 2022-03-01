import { baseUrl } from "../settings/api.js";

const featuredProducts = document.querySelector(".featured-slide");

export function getFeaturedProducts(products) {

    featuredProducts.innerHTML = "";

    products.forEach(function (product){

        let imageCheck = "";
        
        if(product.image) {
            imageCheck = baseUrl + product.image.url;
        }
        if (product.image_url) {
            imageCheck = product.image_url;
        }
        featuredProducts.innerHTML += `<a class="featured-card" href="productDetails.html?id=${product.id}">
        <img class="featured-image" src="${imageCheck}" alt="${product.title}">
        <div class="feat-tx">
        <h4>${product.title}</h4>
        <p>$${product.price}</p>
        </div>
        </div>`;
    });
}

const btnRight = document.querySelector(".right-point");
const btnLeft = document.querySelector(".left-point");

const scrollLeft = Element.scrollLeft;

btnRight.onclick = function () {
    const slider = document.querySelector(".featured-slide");
    const item = slider.querySelector(".featured-card");
    const width = item.offsetWidth;
    slider.scrollLeft += width;
};

btnLeft.onclick = function () {
    const slider = document.querySelector(".featured-slide");
    const item = slider.querySelector(".featured-card");
    const width = item.offsetWidth;
    slider.scrollLeft -= width;
};