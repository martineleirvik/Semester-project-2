const featuredProducts = document.querySelector(".featured-slide");

export function getFeaturedProducts(products) {

    featuredProducts.innerHTML = "";

    products.forEach(function (product){
        featuredProducts.innerHTML += `<a class="featured-card" href="productDetails.html?id=${product.id}">
        <img class="featured-image" src="http://localhost:1337${product.image.formats.medium.url}" alt="${product.image.alternativeText}">
        <div class="feat-tx">
        <h4>${product.title}</h4>
        <p>$${product.price}</p>
        </div>
        </div>`;
    });
}