const productsContainer = document.querySelector(".container");

export function renderProducts(render) {

    productsContainer.innerHTML = "";

    render.forEach(function (product){
        productsContainer.innerHTML += `<a class="product-card" href="productDetails.html?id=${product.id}">
                                <h4>${product.title}</h4>
                                <p>${product.price}</p>
                                <img class="products-image" src="http://localhost:1337${product.image.formats.medium.url}" alt="${product.image.alternativeText}">
         
        </a>`;


    })



}