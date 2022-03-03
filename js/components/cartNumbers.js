function getProductFromStorage () {
    const removeFromStorage = localStorage.getItem("products");

    if(!removeFromStorage) {
        return []
    }
    return JSON.parse(removeFromStorage);
}

export function cartNumbers() {
    let productNumber = getProductFromStorage().length;

    if(productNumber) {
        document.querySelector(".menu span").innerHTML = productNumber;
    }
}