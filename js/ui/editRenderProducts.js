const productsContainer = document.querySelector(".container");
const baseUrl = "http://localhost:1337"

export function editRenderProducts(render) {

    productsContainer.innerHTML = "";


    render.forEach(function (product){

        let imageCheck = "";
        
        if(product.image) {
            imageCheck = baseUrl + product.image.url;
        }
        if (product.image_url) {
            imageCheck = product.image_url;
        }

        productsContainer.innerHTML += `<a class="card" href="editProductsForm.html?id=${product.id}">
                                            <div class="editcard">
                                                <img class="product-image" src="${imageCheck}" alt="${product.title}">
                                                <h4>${product.title}</h4>
                                            </div></a>`
    });
};