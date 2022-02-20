const featuredProducts = document.querySelector(".featured-container");

export function getFeaturedProducts(products) {

    featuredProducts.innerHTML = "";

    products.forEach(function (product){
        featuredProducts.innerHTML += `<div class="featured-list">
        <img class="featured-image" src="http://localhost:1337${product.image.formats.medium.url}" alt="${product.image.alternativeText}">
        <h4>${product.title}</h4>
        <p>${product.price}</p>
        </div>`;
    });
}