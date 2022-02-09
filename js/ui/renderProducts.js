const productsContainer = document.querySelector(".container");

export function renderProducts(render) {

    productsContainer.innerHTML = "";

    render.forEach(function (product){
        productsContainer.innerHTML += `<a class="product" href="productDetails.html?id=${product.id}">
        <div class="col-md-6 col-lg-3">
        <div class="card">
          <img src="${product.image.formats.large.url}" class="card-img-top" alt="${product.image.alternativeText}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.price}</p>
            <a href="productDetails.html?id=${product.id}" class="btn btn-primary">Shop</a>
          </div>
        </div>
      </div>
        
        
        
        <a class="product" href="productDetails.html?id=${product.id}">
                                <h4>${product.title}</h4>
                                <p>${product.price}</p>
                                <img class="heropicture" src="${product.image.formats.large.url}" alt="${product.image.alternativeText}">
        
        `


    })



}