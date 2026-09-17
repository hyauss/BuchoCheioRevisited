import { RatingViewModel } from "./RatingViewModel.js";

const viewModel = new RatingViewModel();
const restauranteId = Number(new URLSearchParams(window.location.search).get("id"));

const restaurantName = document.querySelector("#restaurantName");
const restaurantRatings = document.querySelector("#restaurantRatings");
const restaurantImage = document.querySelector("#restaurantImage");
const restaurantInfoName = document.querySelector("#restaurantInfoName");
const restaurantInfoCnpj = document.querySelector("#restaurantInfoCnpj");
const restaurantInfoAddress = document.querySelector("#restaurantInfoAddress");
const backLink = document.querySelector(".restaurantHeading > a");
const ratingDialog = document.querySelector("#ratingDialog");
const openRatingDialog = document.querySelector("#openRatingDialog");

function obterImagem(media, fallback) {
    return media && !media.endsWith("exampleLogo.png") ? media : fallback;
}

function criarEstrelas(quantidade, classe) {
    return Array.from({ length: quantidade }, () =>
        `<img src="Assets/blackstar.svg" alt="Estrela de avaliação" class="${classe}">`
    ).join("");
}

function criarCardAvaliacao(avaliacao) {
    const article = document.createElement("article");

    article.innerHTML = `
        <img class="headerImages" src="Assets/person.crop.circle.png" alt="Imagem de perfil">
        <div class="restaurantRatingCard">
            ${criarEstrelas(avaliacao.stars, "")}
        </div>
        <h2 class="foodName">Avaliação</h2>
        <p>${avaliacao.desc}</p>
    `;

    return article;
}

function renderRating(restaurante) {
    restaurantName.textContent = restaurante.name;
    restaurantInfoName.textContent = restaurante.name;
    restaurantInfoCnpj.textContent = `CNPJ: ${restaurante.CNPJ}`;
    restaurantInfoAddress.textContent = `Endereço: ${restaurante.address}`;
    restaurantImage.src = obterImagem(restaurante.medias[0], "Assets/tiozao.png");
    backLink.href = `../userMenu/menu.html?id=${restaurante.id}`;

    viewModel.avaliacoes.forEach(avaliacao => {
        restaurantRatings.appendChild(criarCardAvaliacao(avaliacao));
    });
}

openRatingDialog.addEventListener("click", () => {
    ratingDialog.showModal();
});

async function inicializar() {
    await viewModel.selecionarRestaurante(restauranteId);

    if (viewModel.restauranteSelecionado) {
        renderRating(viewModel.restauranteSelecionado);
    }
}

inicializar();
