const productsContainer = document.querySelector(".container");
const noProductsContainer = document.querySelector(".noProducts");

export function renderProducts(render) {

    productsContainer.innerHTML = "";
    noProductsContainer.innerHTML = "";

    render.forEach(function (product){
        productsContainer.innerHTML += `<a class="card" href="productDetails.html?id=${product.id}">
                                            <img class="product-image" src="http://localhost:1337${product.image.formats.medium.url}" alt="${product.image.alternativeText}">
                                            <div class="product-info">
                                            <h3>${product.title}</h3>
                                            <h4>$${product.price}</h4>
                                            </div>
                                            
                                        </a>`;
    });

    if(render.length === 0) {
        return noProductsContainer.innerHTML = `<p id="noSearchValue">No products.</p>`;
    }
}