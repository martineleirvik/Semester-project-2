const productsContainer = document.querySelector(".products");

export function renderProducts(render) {

    productsContainer.innerHTML = "";

    render.forEach(function (product){
        productsContainer.innerHTML += `<a class="product" href="productDetails.html?id=${product.id}">
                                <h4>${product.title}</h4>
                                <p>${product.price}</p>
                                <img class="heropicture" src="${product.image.formats.large.url}" alt="${product.image.alternativeText}">
        
        `


    })



}