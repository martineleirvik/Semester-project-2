import { baseUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";

export function deleteButton(id) {
    const container = document.querySelector(".delete-container");

    container.innerHTML = `<button type="button" class="delete">Delete product</button>`;
}