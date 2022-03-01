import { getUsername } from "../utils/storage.js";
import { logoutBtn } from "./logoutBtn.js";

export default function navBar() {

    const { pathname } = document.location;
    const container = document.querySelector(".menu-container");

    const username = getUsername();
    
    let loginLink = `<li><a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a></li>`;

    if (username) {
        loginLink = `<ul>
        <li><a href="addProducts.html" class="edit-products-link">Add products</a></li>
        <li><a href="editProducts.html" class="edit-products-link">Edit products</a></li>
        <li><button id="logout-link">Logout <strong>${username}</strong></button></li>
        </ul>`}

    container.innerHTML = `<div class="menu">
                                <div class="customer-menu">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="products.html">Shop</a></li>
                                    <li><a href="cart.html"><i class="fas fa-shopping-cart"></i><span>0</span></a></li>
                                </ul>
                                </div>
                                <div class="admin-menu">
                                   ${loginLink}
                                </div>
                            </div>`;

    logoutBtn();

};