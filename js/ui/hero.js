const heroContainer = document.querySelector(".hero-banner");

export function createHero(header) {
   
        heroContainer.innerHTML += `<div class="hero">
        <img class="heropicture" src="http://localhost:1337/uploads/large_jakob_owens_Jz_J_Syb_P_Fb3s_unsplash_0840f6de0c.jpg"}" alt="${header.hero_banner_alt_text}">
        </div>`;

    };