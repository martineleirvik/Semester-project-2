import { baseUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";
import { displayMessage } from "../displayMessage.js";

export function deleteButton(id) {
    const container = document.querySelector(".delete-container");

    container.innerHTML = `<button type="button" class="delete">Delete product</button>`;

    const button = document.querySelector("button.delete");

    button.onclick = async function() {
        console.log(id);

        const confirmDelete = confirm("Are you sure you want to delete this product?");
        console.log(confirmDelete);

    if(confirmDelete) {

        const url = baseUrl + "/products/" + id;

        const token = getToken();

         const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },

        };

        try {
            const response = await fetch(url, options);
            const json = await response.json();

            location.href = "/editProducts.html";

        }
        catch (error){
            displayMessage("error", "An error occured", ".message-container");

        }
            
        }
    }
};