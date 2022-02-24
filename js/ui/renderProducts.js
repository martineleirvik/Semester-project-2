const baseUrl = "http://localhost:1337"

const productsContainer = document.querySelector(".container");
const noProductsContainer = document.querySelector(".noProducts");

export function renderProducts(render) {

    productsContainer.innerHTML = "";
    noProductsContainer.innerHTML = "";

    render.forEach(function (product){

        let imageCheck = "";
        
        if(product.image) {
            imageCheck = baseUrl + product.image.url;
        }
        if (product.image_url) {
            imageCheck = product.image_url;
        }

        productsContainer.innerHTML += `<a class="card" href="productDetails.html?id=${product.id}">
                                            <img class="product-image" src="${imageCheck}" alt="">
                                            <div class="product-info">
                                            <h3>${product.title}</h3>
                                            <h4>$${product.price}</h4>
                                            </div>
                                            <p><button>Add to Cart</button></p>
                                        </a>`;
    });

    if(render.length === 0) {
        return noProductsContainer.innerHTML = `<p id="noSearchValue">No products.</p>`;
    }
}