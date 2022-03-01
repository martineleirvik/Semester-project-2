import { displayMessage } from "./components/displayMessage.js";
import navBar from "./components/navBar.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";

navBar();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const message = document.querySelector(".message-container");
const featured = document.querySelector("#featured");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = image.value.trim();
    const featuredValue = featured.checked;

    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageValue.length === 0) {
        return displayMessage("warning", "Enter valid values", ".message-container");
    }

    addProducts(titleValue, priceValue, descriptionValue, featuredValue, imageValue);
}

async function addProducts(title, price, description, featured, image) {
    const url = baseUrl + "/products";

    const data = JSON.stringify({title: title, price: price, description: description, featured: featured, image_url: image});

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-type": "application/json",
             Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch (url, options);
        const json = await response.json();

        console.log(json);

        if (json.created_at) {
            displayMessage("success", "Product added", ".message-container");
            form.reset();
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }
        
    }
    catch(error){
        displayMessage("error", "An error occured", ".message-container");
    }

}