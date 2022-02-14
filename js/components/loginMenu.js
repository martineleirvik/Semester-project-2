import { getUsername } from "../utils/storage.js";
import { logoutBtn } from "./logoutBtn.js";

export default function loginMenu() {

    const username = getUsername();
    console.log(username);
    
    const container = document.querySelector(".login-container");
    
    let loginLink = `<a href="login.html">Login</a>`;

    if (username) {
        loginLink = `<button id="logout-link">Logout ${username}</button>
        <a href="addProducts.html" class="edit-products-link">Add products</a>
        <a href="editProducts.html" class="edit-products-link">Edit products</a>
        `}

    container.innerHTML = `<div class="login-btn">
                            ${loginLink}
                            </div>`;

    logoutBtn();

};