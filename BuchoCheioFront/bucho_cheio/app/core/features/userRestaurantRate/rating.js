import { RatingViewModel } from "./RatingViewModel.js";

const viewModel = new RatingViewModel();
const restauranteId = Number(new URLSearchParams(window.location.search).get("id"));

const restaurantName = document.querySelector("#restaurantName");
const restaurantRatings = document.querySelector("#restaurantRatings");
const restaurantImage = document.querySelector("#restaurantImage");
const restaurantInfoName = document.querySelector("#restaurantInfoName");
const restaurantInfoCnpj = document.querySelector("#restaurantInfoCnpj");
const restaurantInfoAddress = document.querySelector("#restaurantInfoAddress");
const restaurantRating = document.querySelector("#restaurantRating");
const ratingAverage = document.querySelector("#ratingAverage");
const backLink = document.querySelector(".restaurantHeading > a");
const ratingDialog = document.querySelector("#ratingDialog");
const openRatingDialog = document.querySelector("#openRatingDialog");
const ratingForm = document.querySelector("#ratingForm");
const ratingComment = document.querySelector("#ratingComment");
const ratingStars = document.querySelectorAll(".ratingStar");
const restaurantImages = document.querySelector("#restaurantImages");

let notaSelecionada = 5;

function obterImagem(media, fallback) {
    return media && !media.endsWith("exampleLogo.png") ? media : fallback;
}

function criarEstrelas(quantidade, classe) {
    return Array.from({ length: quantidade }, () =>
        `<img src="Assets/blackstar.svg" alt="Estrela de avaliação" class="${classe}">`
    ).join("");
}

function calcularMediaAvaliacoes(avaliacoes) {
    const quantidadePorNota = new Map();

    avaliacoes.forEach(avaliacao => {
        const quantidade = quantidadePorNota.get(avaliacao.stars) || 0;
        quantidadePorNota.set(avaliacao.stars, quantidade + 1);
    });

    const totalAvaliacoes = [...quantidadePorNota.values()]
        .reduce((total, quantidade) => total + quantidade, 0);
    const somaNotas = [...quantidadePorNota.entries()]
        .reduce((soma, [nota, quantidade]) => soma + nota * quantidade, 0);

    return totalAvaliacoes ? somaNotas / totalAvaliacoes : 0;
}

function atualizarRatingGeral() {
    const media = calcularMediaAvaliacoes(viewModel.avaliacoes);
    const estrelasPreenchidas = Math.round(media);

    restaurantRating.querySelectorAll("img").forEach(star => star.remove());
    if (media === 0) {
        ratingAverage.textContent = "Sem avaliações";
        restaurantRating.setAttribute("aria-label", "Sem avaliações");
        return;
    }

    restaurantRating.insertAdjacentHTML("afterbegin", Array.from(
        { length: estrelasPreenchidas },
        () => '<img src="Assets/star.png" alt="Estrela de avaliação">'
    ).join(""));
    ratingAverage.textContent = `${media.toFixed(1).replace(".", ",")}/5`;
    restaurantRating.setAttribute("aria-label", `Média de ${media.toFixed(1)} de 5`);
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

function atualizarEstrelas() {
    ratingStars.forEach(star => {
        const selecionada = Number(star.dataset.rating) <= notaSelecionada;
        star.classList.toggle("selected", selecionada);
        star.setAttribute("aria-pressed", String(selecionada));
    });
}

function adicionarAvaliacao(event) {
    if (event.submitter?.classList.contains("ratingDialogClose")) {
        return;
    }

    event.preventDefault();

    const comentario = ratingComment.value.trim();
    if (!comentario) {
        ratingComment.focus();
        return;
    }

    const avaliacao = {
        stars: notaSelecionada,
        desc: comentario
    };

    viewModel.avaliacoes.unshift(avaliacao);
    restaurantRatings.prepend(criarCardAvaliacao(avaliacao));
    atualizarRatingGeral();
    ratingForm.reset();
    notaSelecionada = 5;
    atualizarEstrelas();
    ratingDialog.close();
}

function renderRating(restaurante) {
    restaurantName.textContent = restaurante.name;
    restaurantInfoName.textContent = restaurante.name;
    restaurantInfoCnpj.textContent = `CNPJ: ${restaurante.CNPJ}`;
    restaurantInfoAddress.textContent = `Endereço: ${restaurante.address}`;
    restaurantImage.src = obterImagem(restaurante.medias[0], "Assets/tiozao.png");
    renderRestaurantImages(restaurante.restImages ?? []);
    backLink.href = `../userMenu/menu.html?id=${restaurante.id}`;
    atualizarRatingGeral();

    viewModel.avaliacoes.forEach(avaliacao => {
        restaurantRatings.appendChild(criarCardAvaliacao(avaliacao));
    });
}

openRatingDialog.addEventListener("click", () => {
    atualizarEstrelas();
    ratingDialog.showModal();
});

ratingStars.forEach(star => {
    star.addEventListener("click", () => {
        notaSelecionada = Number(star.dataset.rating);
        atualizarEstrelas();
    });
});

ratingForm.addEventListener("submit", adicionarAvaliacao);

async function inicializar() {
    await viewModel.selecionarRestaurante(restauranteId);

    if (viewModel.restauranteSelecionado) {
        renderRating(viewModel.restauranteSelecionado);
    }
}

function renderRestaurantImages(imagens) {
    restaurantImages.innerHTML = "";

    imagens.forEach(imagem => {
        const image = document.createElement("img");
        image.src = imagem;
        image.alt = "Foto do restaurante";
        restaurantImages.appendChild(image);
    });
}

inicializar();
