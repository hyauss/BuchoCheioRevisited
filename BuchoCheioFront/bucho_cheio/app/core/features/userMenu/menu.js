import { MenuViewModel } from "./MenuViewModel.js";

const viewModel = new MenuViewModel();
const restauranteId = Number(new URLSearchParams(window.location.search).get("id"));

const restaurantName = document.querySelector("#restaurantName");
const highlightedDishes = document.querySelector("#highlightedDishes");
const menuDishes = document.querySelector("#menuDishes");
const backLink = document.querySelector(".restaurantHeading > a");
const rateRestaurantLink = document.querySelector("#rateRestaurantLink");

function obterImagem(media, fallback) {
    return media && !media.endsWith("exampleLogo.png") ? media : fallback;
}

function criarCardPrato(prato, classeCard, classeTexto, imagemFallback) {
    const article = document.createElement("article");
    article.className = classeCard;

    article.innerHTML = `
        <img src="${obterImagem(prato.media[0], imagemFallback)}" alt="${prato.title}" class="${classeCard === "foodCard" ? "foodImage" : ""}">
        <div class="${classeTexto}">
            <h2 class="text foodTitle">${prato.title}</h2>
            <p class="text foodDescription">${prato.desc}</p>
            <h1 class="text foodPrice">R$ ${Number(prato.price).toFixed(2).replace(".", ",")}</h1>
        </div>
    `;

    return article;
}

function renderMenu(restaurante) {
    restaurantName.textContent = restaurante.name;
    backLink.href = `../restaurantes/restaurantes.html?id=${restaurante.id}`;
    rateRestaurantLink.href = `../userRestaurantRate/rating.html?id=${restaurante.id}`;

    const pratos = viewModel.pratos;
    pratos.slice(0, 4).forEach(prato => {
        highlightedDishes.appendChild(
            criarCardPrato(prato, "foodCard", "foodText", "Assets/foodimage.png")
        );
    });

    pratos.forEach(prato => {
        menuDishes.appendChild(
            criarCardPrato(prato, "foodCardMenu", "foodTextMenu", "Assets/foodimage2.png")
        );
    });
}

async function inicializar() {
    await viewModel.selecionarRestaurante(restauranteId);

    if (viewModel.restauranteSelecionado) {
        renderMenu(viewModel.restauranteSelecionado);
    }
}

inicializar();
