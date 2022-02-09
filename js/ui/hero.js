const heroContainer = document.querySelector(".hero-banner");

export function createHero(header) {
   
        heroContainer.innerHTML += `<div class="hero">
        <img class="heropicture" src="${header.hero_banner.url}" alt="${header.hero_banner_alt_text}">
        </div>`;

    };