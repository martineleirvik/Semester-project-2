import { getUsername, clearKeyStorage } from "../utils/storage.js";
import { userKey } from "../settings/storageKey.js";

export function logoutBtn() {

    const button = document.querySelector("#logout-link");

    if(button) {
        button.onclick = function() {
            const doLogout = confirm("Are you sure you want to logout?");

            if(doLogout) {
                clearKeyStorage(userKey);
                location.href = "/";
            }
        };
    }
};