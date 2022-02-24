const productsContainer = document.querySelector(".container");

export function editRenderProducts(render) {

    productsContainer.innerHTML = "";

    render.forEach(function (product){
        productsContainer.innerHTML += `<a class="card" href="editProductsForm.html?id=${product.id}">
                                            <div class="editcard">
                                                <h4>${product.title}</h4>
                                                <p>$${product.price}</p>
                                                <img class="" src="" alt="">
                                            </div></a>`
    });
};