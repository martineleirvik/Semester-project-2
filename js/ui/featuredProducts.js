const featuredProducts = document.querySelector(".featured-container");

export function getFeaturedProducts(products) {

    featuredProducts.innerHTML = "";

    products.forEach(function (product){
        featuredProducts.innerHTML += `<div class="featured-list">
        <h4>${product.title}</h4>
        <p>${product.price}</p>
        </div>`;
    });
}