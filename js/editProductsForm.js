import { baseUrl } from "./settings/api.js";
import { getToken } from "./utils/storage.js";
import { displayMessage } from "./components/displayMessage.js";
import navBar from "./components/navBar.js";
import { deleteButton } from "./components/delete/deleteBtn.js"

navBar();

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");

if(!id) {
    document.location.href = "/";
}

const productsUrl = baseUrl + "/products/" + id;

const form = document.querySelector(".edit-form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loader");
const featured = document.querySelector("#editfeatured");

(async function() {

    try {
        const response = await fetch(productsUrl);
        const details = await response.json();
        console.log(details);



        let imageCheck = "";
        if (details.image) {
            imageCheck = baseUrl + details.image.url;
        }
        if (details.image_url) {
            imageCheck = details.image_url;
        }

        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        image.value = imageCheck;
        idInput.value = details.id;
        featured.checked = details.featured;

        deleteButton(details.id);

    }
    catch (error) {
        displayMessage("error", "An error occured", ".message-container");
    }
    finally {
        loading.style.display = "none";
        form.style.display = "block";
    }

})()

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = image.value.trim();
    const idValue = idInput.value;
    const featuredValue = featured.checked;

    console.log("priceValue", featured);

    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageValue.length === 0) {
        return displayMessage("warning", "Enter valid values", ".message-container");
    }

    updateProduct(titleValue, priceValue, descriptionValue, imageValue, featuredValue, idValue);

}

async function updateProduct(title, price, description, image, featured, id) {

    const url = baseUrl + "/products/" + id;
    const data = JSON.stringify({title: title, price: price, description: description, featured: featured, image_url: image});

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch (url, options);
        const json = await response.json();

        console.log(json);

        if(json.updated_at) {
            displayMessage("success", "Product updated", ".message-container");
        }

        if(json.error) {
            displayMessage("error", json.message, ".message-container");
        }
    }
    catch(error) {
        displayMessage("error", "An error occured", ".message-container");
    }

}
