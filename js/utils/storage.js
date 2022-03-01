import { tokenKey } from "../settings/storageKey.js";
import { userKey } from "../settings/storageKey.js";

export function saveToken(token) {
    saveToStorage(tokenKey, token);
}

export function getToken() {
    return getFromStorage(tokenKey)
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function getUsername() {
    const user = getFromStorage(userKey);

    if(user) {
        return user.username;
    }
    return null;
}

export function clearKeyStorage() {
    localStorage.removeItem(userKey);
}

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if(!value) {
        return []
    }
    return JSON.parse(value);
}