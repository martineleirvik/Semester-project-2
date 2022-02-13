import { displayMessage } from "./components/displayMessage.js";
import  loginMenu from "./components/loginMenu.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";

loginMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = image.value.trim();

    console.log("priceValue", priceValue);

    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageValue.length === 0) {
        displayMessage("warning", "Enter valid values", ".message-container");

    }

    addProducts(titleValue, priceValue, descriptionValue, imageValue);

}

async function addProducts(title, price, description, image) {
    const url = baseUrl + "products";

    const data = JSON.stringify({title: title, price: price, description: description, image_url: image});

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-type": "application/json",
             Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch (url, options);
        const json = await response.json();

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