import { RestauranteViewModel } from "./RestauranteViewModel.js";

const viewModel = new RestauranteViewModel();

const container = document.querySelector("#restaurantesSection");

function renderRestaurantes() {

    container.innerHTML = "";

    viewModel.restaurantes.forEach(restaurante => {

        const article = document.createElement("article");

        article.innerHTML = `
            <div class="text cardText">
                <p>Restaurante: ${restaurante.name}</p>
                <p>Endereço: ${restaurante.address}</p>
                <p>CNPJ: ${restaurante.CNPJ}</p>
                <button class="grayButton cardButton" onclick="window.location.href='../userMenu/menu.html?id=${restaurante.id}'">
                    Ver restaurante
                </button>
            </div>

            <img
                src="${restaurante.medias[0] ?? 'Assets/exampleLogo.png'}"
                alt="Logo do restaurante"
            >
        `;

        container.appendChild(article);
    });
}

async function inicializar() {
    await viewModel.carregarRestaurantes();

    renderRestaurantes();
}

inicializar();