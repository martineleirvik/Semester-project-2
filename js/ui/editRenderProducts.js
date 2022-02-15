const productsContainer = document.querySelector(".edit-products-container");

export function editRenderProducts(render) {

    productsContainer.innerHTML = "";

    render.forEach(function (product){
        productsContainer.innerHTML += `<div class="edit" href="productDetails.html?id=${product.id}">
                                    <a class="editproduct" href="editProductsForm.html?id=${product.id}">
                                <h4>${product.title}</h4>
                                <p>$${product.price}</p>
                                <img class="" src="" alt="">
        
        </a></div>`;
    });
};