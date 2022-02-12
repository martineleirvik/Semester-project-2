import { getUsername } from "../utils/storage.js";

export default function loginMenu() {

    const username = getUsername();
    console.log(username);
    
    const container = document.querySelector(".login-container");
    
    let loginLink = `<a href="login.html">Login</a>`;

    if (username) {
        loginLink = `<span>Logged in as ${username}</span>`;
    }

    container.innerHTML = `<div class="login-btn">
                            ${loginLink}
                            </div>`;

}