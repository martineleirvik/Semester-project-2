const heroContainer = document.querySelector(".hero-banner");

export function createHero(header) {
   
        heroContainer.innerHTML += `<div class="hero">
        <img class="heropicture" src="http://localhost:1337${header.hero_banner.formats.large.url}" alt="${header.hero_banner_alt_text}">
        </div>`;

    };