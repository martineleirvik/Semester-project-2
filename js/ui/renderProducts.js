const productsContainer = document.querySelector(".container");

export function renderProducts(render) {

    productsContainer.innerHTML = "";

    render.forEach(function (product){
        productsContainer.innerHTML += `<a class="card" href="productDetails.html?id=${product.id}">
                                            <img class="product-image" src="http://localhost:1337${product.image.formats.medium.url}" alt="${product.image.alternativeText}">
                                            <div class="product-info">
                                            <h3>${product.title}</h3>
                                            <h4>$${product.price}</h4>
                                            </div>
                                            <p><button>Add to Cart</button></p>
                                        </a>`;
    });
}